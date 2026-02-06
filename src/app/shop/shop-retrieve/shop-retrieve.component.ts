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
  shippoingcartService = inject(ShippingcartServiceService);

  sizesAvailable: string[] = [];
  productPrice = signal<number>(0);
  colors = signal<string[]>([]);
  variantImages = signal<string[]>([]);
  varaintSize = signal<string[]>([]);
  addButtonDisabled = true;


  article!: Article

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const articleSlug = this.route.snapshot.paramMap.get('slug');
    this.article = articlesDb.find(article => article.slug === articleSlug)!;
    this.getColors();

    this.route.queryParamMap.subscribe(params => {
      const variant = params.get('color');

      if (variant) {
        this.selectedColor = variant;
        this.getVariant(variant)

      } else {
        const firstVariant = Object.keys(this.article.colors)[0] || null;

        if (firstVariant) {
          this.selectedColor = firstVariant;
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
    if (this.article.colors) {
      this.colors.set(Object.keys(this.article.colors));
    }
    return this.colors();
  }

  getProductPrice(color: string, size: string) {
    const color_key = this.article.colors[color];
    if (size && color_key) {
      const price = color_key.variants.find(v => v.size === size)?.price;
      console.log(price);
      this.productPrice.set(price || 0);
    } else if (color_key?.variants.length == 1) {
      const price = color_key.variants[0].price;
      this.productPrice.set(price || 0);
    }
    return this.totalPrice
  }

  getVariantImages(color: string) {
    const color_key = this.article.colors[color]!;
    const images = color_key.images;
    if (images.length == 0) {
      return this.variantImages.set(['/assets/img/coming.jpg']);
    }
    return this.variantImages.set(images);
  }

  changeSize(size: string) {
    this.selectedSize = size;
    this.getVariant(this.selectedColor);
  }


  changeVariant(color: string) {
    this.router.navigate([], {
      queryParams: { color: color },
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
    const variants = this.article.colors[this.selectedColor]!.variants;
    const size = variants.find(v => v.size == this.selectedSize)?.size;
    return size || 'No size'
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

  getSizes(color: string): string[] {
    const color_key = this.article.colors[color]!;
    this.sizesAvailable = color_key.variants.map(variant => variant.size ? variant.size : '').filter(size => size !== '');

    if (this.sizesAvailable.includes(this.selectedSize!)) {
      return this.sizesAvailable;
    } else {
      this.selectedSize = undefined
    }
    return this.sizesAvailable;
  }

  getPrice(color: string, size: string): number | null {
    const color_key = this.article.colors[color]!;
    const variant = color_key.variants.find(variant => variant.size === size);
    return variant ? variant.price : null;
  }


  backgroundColor(color: string) {
    const hex = this.article.colors[color]?.hex

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
