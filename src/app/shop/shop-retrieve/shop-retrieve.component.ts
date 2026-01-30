import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';

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
  productPrice = 10.00;
  productName = 'Produkt 1';
  shippoingcartService = inject(ShippingcartServiceService);


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
        total: this.totalPrice
      }
      this.shippoingcartService.addItem(data);
    }
  }

  get totalPrice(): number {
    return this.productPrice * (this.selectedAmount ?? 1);
  }



}
