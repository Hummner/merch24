import { Component, DebugEventListener, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CustomerDetails } from '../../interfaces/customer-details';
import { Router } from '@angular/router';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  customerDetails!: CustomerDetails;
  cartService = inject(ShippingcartServiceService)
  cart!: CartItems[];

  constructor(private router: Router) {
    if (!this.loadSessionStorage()) {
      this.router.navigateByUrl('shop')
    }

  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cart = items
    })
  }

  loadSessionStorage() {
    const getCustomerDetails = sessionStorage.getItem("customerDetails")
    if (getCustomerDetails) {
      this.customerDetails = JSON.parse(getCustomerDetails);
      return true
    }
    return false
    
  }



}
