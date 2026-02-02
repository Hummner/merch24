import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-shop-retrieve',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule],
  templateUrl: './shop-retrieve.component.html',
  styleUrl: './shop-retrieve.component.scss'
})
export class ShopRetrieveComponent {

  amount: number[] = [1, 2, 3, 4, 5]
  colors: string[] = ['Rot', 'Blau', 'Grün', 'Schwarz', 'Weiß']
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL']
  selectedAmount: number | null = null;
  selectedColor: string | null = null;
  selectedSize: string | null = null;
  
  productName = 'Produkt 1';
  id = 1;
  shippoingcartService = inject(ShippingcartServiceService);

  sizesAvailable: string[] = [];
  productPrice!: number;


  article: Article = {
    name: 'Frohnhausen T-Shirt',
    description: 'Frohnhausen T-Shirt in verschiedenen Farben und Größen.',
    slug: 'frohnhausen-tshirt',
    variant: {
      'Rot': [{ id: 1, color: 'Rot', size: 'M', stock: 10, sku: 'FT-RED-M', price: 19.99 },
      { id: 2, color: 'Rot', size: 'L', stock: 5, sku: 'FT-RED-L', price: 19.99 }],
      'Blau': [{ id: 3, color: 'Blau', size: 'L', stock: 8, sku: 'FT-BLU-L', price: 19.99 }]
    }
  }


  onSubmit(form: any) {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      const data: CartItems = {
        name: this.productName,
        price: this.productPrice,
        amount: this.selectedAmount!,
        color: this.selectedColor!,
        size: this.selectedSize!,
        total: this.totalPrice,
        id: this.id
      }
      this.shippoingcartService.addItem(data);
    }
  }

  get totalPrice(): number {
    return this.productPrice * (this.selectedAmount ?? 1);
  }

  getColors() {
    return Object.keys(this.article.variant);
  }

  getSizes(color: string): string[] {
    return this.sizesAvailable = this.article.variant[color].map(variant => variant.size);
  }

  getPrice(color: string, size: string): number | null {
    const variant = this.article.variant[color].find(variant => variant.size === size);
    return variant ? variant.price : null;
  }

  getVariant(color: string, size: string) {
    this.getColors();
    this.getSizes(color);
    this.getPrice(color, size);
  }


}
