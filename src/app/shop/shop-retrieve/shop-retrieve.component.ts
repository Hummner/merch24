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

  productName = 'Produkt 1';
  id = 1;
  shippoingcartService = inject(ShippingcartServiceService);

  sizesAvailable: string[] = [];
  productPrice = signal<number>(0);
  colors = signal<string[]>([]);
  variantImages = signal<string[]>([]);
  addButtonDisabled = true;


  article!: Article

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      const variant = params.get('variant');
      const articleSlug = this.route.snapshot.paramMap.get('slug');
      this.article = articlesDb.find(article => article.slug === articleSlug)!;
      console.log(articleSlug, this.article);
      this.getColors();

      if (variant) {
        this.selectedColor = variant;
        this.getVariant(variant)

        console.log("uj varians: ", variant);

      } else {
        const firstVariant = Object.keys(this.article.variant)[0] || null;
        console.log(firstVariant);

        if (firstVariant) {
          this.selectedColor = firstVariant;
          this.router.navigate([],
            {
              queryParams: { variant: firstVariant },
            }
          )

          this.changeVariant(firstVariant);
          this.getVariant(firstVariant);

        }
      }
    })
  }

  getVariant(color: string) {
    this.getSizes(color);
    this.getVariantImages(color);
    this.getProductPrice(color, this.selectedSize!);
    this.checkInputs()
  }


  getColors() {
    if (this.article.variant) {
      this.colors.set(Object.keys(this.article.variant));
    }
    return this.colors();
  }

  getProductPrice(color: string, size: string) {
    const variants = this.article.variant[color] ?? [];
    if (size && this.article.variant[color]) {
      const price = variants.find(variant => variant.size === size)?.price;
      console.log(price);
      this.productPrice.set(price || 0);
    } else if (this.article.variant[color]?.length == 1) {
      const price = variants[0]?.price;
      this.productPrice.set(price || 0);
    }
    return this.totalPrice
  }

  getVariantImages(color: string) {
    const variants = this.article.variant[color] ?? [];
      const images = variants[0]?.images || [];
      return this.variantImages.set(images);
  }

  changeSize(size: string) {
    this.selectedSize = size;
    this.getVariant(this.selectedColor);
  }


  changeVariant(color: string) {
    this.router.navigate([], {
      queryParams: { variant: color },
    });
    this.selectedColor = color;
  }


  addToCart() {
    this.checkInputs();
    const data: CartItems = {
      name: this.productName,
      price: this.productPrice(),
      amount: this.selectedAmount!,
      color: this.selectedColor!,
      size: this.selectedSize || null,
      total: this.totalPrice,
      id: this.id
    }
    this.shippoingcartService.addItem(data);
  }

  checkInputs() {
    if (!this.selectedColor) {
      if (this.sizesAvailable.length > 0) {
        this.addButtonDisabled = true;
        return;
      }
    }
    this.addButtonDisabled = false;
  }


  get totalPrice(): number {
    return this.productPrice() * (this.selectedAmount);
  }

  getSizes(color: string): string[] {
    const variants = this.article.variant[color] ?? [];
    this.sizesAvailable = variants.map(variant => variant.size? variant.size : '').filter(size => size !== '');
    
    if (this.sizesAvailable.includes(this.selectedSize!)) {
      return this.sizesAvailable;
    } else {
      this.selectedSize = undefined
    }
    return this.sizesAvailable;
  }

  getPrice(color: string, size: string): number | null {
    const variants = this.article.variant[color] ?? [];
    const variant = variants.find(variant => variant.size === size);
    return variant ? variant.price : null;
  }


  backgroundColor(color: string) {
    return {
      'background-color': color.toLowerCase(), important: 'true'
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
