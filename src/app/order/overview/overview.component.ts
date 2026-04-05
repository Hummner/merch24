import { Component, DebugEventListener, inject, model, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CustomerDetails } from '../../interfaces/customer-details';
import { Router } from '@angular/router';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  customerDetails!: CustomerDetails;
  cartService = inject(ShippingcartServiceService)
  cart!: CartItems[];
  sumPrice!: number;
  totalAmount!: number;
  shippingCost = 6.95;
  readonly checked = false;
  checkbox_error = false;
  checked_policy = false;

  constructor(private router: Router) {
    if (!this.loadSessionStorage()) {
      this.router.navigateByUrl('shop')
    }

  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items
    })
    this.sumPrice = this.cartService.totalPrice;
    this.totalAmount = this.cartService.totalAmount;
  }

  loadSessionStorage() {
    const getCustomerDetails = sessionStorage.getItem("customerDetails")
    if (getCustomerDetails) {
      this.customerDetails = JSON.parse(getCustomerDetails);
      return true
    }
    return false

  }

  get totalPrice(): number {
    return this.shippingCost + this.sumPrice;
  }

  backToShippingCart() {
    this.router.navigateByUrl("order/shipping-cart")
  }

  order() {
    if(!this.checked)  return this.checkbox_error = true;
    alert("Bestellt")

    return false


  }




}
