import { Component, DebugEventListener, inject, model, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CustomerDetails } from '../../interfaces/customer-details';
import { Router } from '@angular/router';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { OrderComponent } from '../order.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  customerDetails!: CustomerDetails;
  cartService = inject(ShippingcartServiceService)
  db = inject(DbService);
  cart!: CartItems[];
  sumPrice!: number;
  totalAmount!: number;
  shippingCost = 6.95;
  checked = false;
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

  checkCheckboxs() {
    if (!this.checked || !this.checked_policy) return this.checkbox_error = true;
    console.log(this.cart);
    return this.order();
  }

  order() {
    const order = this.getCartJson();
    console.log(order);
  
    this.db.postOrder(order)
    
  }

  getCartJson() {
    console.log(this.cart);
    
    const CD = this.customerDetails
    return {
      "customer_name": CD.address.firstName + CD.address.lastName,
      "shipping_method": this.getShippingMethod(CD),
      "payment_method": this.getPaymentMethod(CD),
      "shipping_address": this.getShippinhAddress(CD),
      "billing_address": this.getBillingAddress(CD),
      "items": this.getItems()
    }
  }

  getItems() {
    return this.cart.map(item => ({product_variant: item.id, quantity: item.amount}))
  }

  getShippinhAddress(CD: CustomerDetails) {
    return {
      "email": CD.address.email,
      "address": CD.address.address,
      "business": CD.address.business,
      "zip": CD.address.zip,
      "city": CD.address.city
    }
  }

  getBillingAddress(CD: CustomerDetails) {
    return {
      "email": CD.billingAddress.email,
      "address": CD.billingAddress.address,
      "business": CD.billingAddress.business,
      "zip": CD.billingAddress.zip,
      "city": CD.billingAddress.city
    }
  }

  getPaymentMethod(CD: CustomerDetails) {
    switch (CD.payment) {
      case "Barzahlung":
        return "cod";
      case "Überweisung":
        return "bank_transfer"
      default:
        throw new Error("Invalid Payment Method")
    }
  }

  getShippingMethod(CD: CustomerDetails) {
    switch (CD.shipment) {
      case "Lieferung":
        return "courier";
      case "Abholung":
        return "pickup";
      default:
        throw new Error("Invalid Shipment Method")
    }
  }
}
