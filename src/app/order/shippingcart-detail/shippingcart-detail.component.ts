import { Component, inject, OnInit } from '@angular/core';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { Article } from '../../interfaces/article';
import { CartItems } from '../../interfaces/cart-items';
import { MatStepper, MatStep, MatStepLabel } from "@angular/material/stepper";

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-shippingcart-detail',
  standalone: true,
  imports: [MatStepper, MatStep, MatStepLabel,MatStepperModule, MatButtonModule],
  templateUrl: './shippingcart-detail.component.html',
  styleUrl: './shippingcart-detail.component.scss'
})
export class ShippingcartDetailComponent implements OnInit {

  shippingcart = inject(ShippingcartServiceService);
  cart!: CartItems[];
  sumPrice!: number;
  shippingCost!: number;
  totalPrice!: number;
  private shippingcartService = inject(ShippingcartServiceService);

  ngOnInit(): void {
    this.shippingcart.cart$.subscribe((items) => {
      this.cart = items;
      this.sumPrice = this.shippingcart.totalPrice;
      this.shippingCost = this.shippingcart.shippingCost;
      this.totalPrice = this.shippingCost + this.sumPrice;

    })
  }

  deleteItemFromCart(item: CartItems) {
    this.shippingcartService.delelteItem(item);
  }

}
