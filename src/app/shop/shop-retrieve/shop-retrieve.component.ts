import { Component, inject, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import { Article } from '../../interfaces/article';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { articlesDb } from '../../services/articles-db';
import { ArticleColors } from '../../interfaces/article-colors';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-shop-retrieve',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule],
  templateUrl: './shop-retrieve.component.html',
  styleUrl: './shop-retrieve.component.scss'
})
export class ShopRetrieveComponent {

  amount: number[] = [1, 2, 3, 4, 5]
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL']


  selectedAmount: number = 1;
  selectedColor!: string;
  selectedSize!: string | undefined;
  selectedIndex = 0;
  shippoingcartService = inject(ShippingcartServiceService);

  sizesAvailable: string[] = [];
  productPrice = signal<number>(0);
  colors = signal<string[]>([]);
  variantImages = signal<string[]>([]);
  varaintSize = signal<string[]>([]);
  addButtonDisabled = true;

  db = inject(DbService)


  article!: Article
  filterdArticles!: Article[]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const articleSlug = this.route.snapshot.paramMap.get('slug');
    if (articleSlug) this.db.getProductFromDB(articleSlug)

    this.db.singleProduct$.subscribe(item => {

      if (!item) return
      this.article = item

      this.selectColor();
      this.getColors();

    })
  }

  selectColor() {

    this.route.queryParamMap.subscribe(params => {
      const variant = params.get('color');

      if (variant) {
        this.selectedColor = variant;
        if (!this.article.colors.length) return
        const article = this.article.colors.find((c?: ArticleColors) => c?.color == variant)
        if (article) {
          this.getVariant(article)
        }


      } else {

        if (!this.article) return

        const firstVariant = this.article.colors[0]

        if (firstVariant) {
          this.selectedColor = firstVariant.color;
          this.changeVariant(firstVariant.color);
          this.getVariant(firstVariant);
        }
      }
    })

  }

  getVariant(color: ArticleColors) {
    this.getSizes(color);
    this.getVariantImages(color);
    this.getProductPrice(color, this.selectedSize!);
    this.checkInputs()
  }


  getColors() {
    if (this.article.colors) {
      this.colors.set(this.article.colors.map(c => c!.color));
    }
    return this.colors();
  }

  getProductPrice(color: ArticleColors, size: string) {
    debugger
    if (size && color) {
      const price = color.variants.find(v => v.size === size)?.price;
      console.log(price);
      this.productPrice.set(Number(price) || 0);
      return price || 0
      
    } else if (color?.variants.length == 1) {
      const price = color.variants[0].price;
      return price
    }
    return 0
  }

  getVariantImages(color: ArticleColors) {
    const images = color.images;
    if (images.length == 0) {
      return this.variantImages.set(['/assets/img/coming.jpg']);
    }


    return this.variantImages.set(images.map(item => item.image));
  }

  changeSize(size: string) {
    this.selectedSize = size;

    this.selectColor();
  }


  changeVariant(color: string) {
    this.router.navigate([], {
      queryParams: { color: color},
      replaceUrl: true,
    });
    this.selectedColor = color;
  }


  addToCart() {
    this.checkInputs();
    const data: CartItems = {
      name: this.article.name,
      price: this.productPrice(),
      amount: this.selectedAmount!,
      color: this.selectedColor!,
      size: this.selectedSize || null,
      total: this.totalPrice,
      sku: this.getSku(),
      image: this.variantImages()[0] || ''
    }

    this.shippoingcartService.addItem(data);
  }

  getSku() {
    // const variants = this.article.colors[this.selectedColor]!.variants;
    // const size = variants.find(v => v.size == this.selectedSize)?.size;
    // return size || 'No size'

    return ""
  }

  checkInputs() {
    if (!this.selectedColor || (this.sizesAvailable.length > 0 && !this.selectedSize)) {
      return this.addButtonDisabled = true;
    }

    return this.addButtonDisabled = false;
  }


  get totalPrice(): number {
    return this.productPrice() * (this.selectedAmount);
  }

  getSizes(colors: ArticleColors): string[] {
    this.sizesAvailable = colors.variants.map(variant => variant.size ? variant.size : '').filter(size => size !== '');

    if (this.sizesAvailable.includes(this.selectedSize!)) {
      return this.sizesAvailable;
    } else {
      this.selectedSize = undefined
    }
    return this.sizesAvailable;
  }

  getPrice(color: ArticleColors, size: string): number | null {
    const variant = color.variants.find(variant => variant.size === size);
    return variant ? variant.price : null;
  }


  backgroundColor(color: string) {
    const hex = this.article.colors.find(c => c?.color == color)?.hex

    return {
      'background-color': hex, important: 'true'
    }
  }


  selectImage(i: number) {
    this.selectedIndex = i;
  }

  next() {
    this.selectedIndex =
      (this.selectedIndex + 1) % this.variantImages().length;
  }

  prev() {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.variantImages().length) % this.variantImages().length;
  }


}
