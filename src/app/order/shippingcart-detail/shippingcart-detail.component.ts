import { Component, inject, OnInit } from '@angular/core';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { Article } from '../../interfaces/article';
import { CartItems } from '../../interfaces/cart-items';

@Component({
  selector: 'app-shippingcart-detail',
  standalone: true,
  imports: [],
  templateUrl: './shippingcart-detail.component.html',
  styleUrl: './shippingcart-detail.component.scss'
})
export class ShippingcartDetailComponent implements OnInit {

  shippingcart = inject(ShippingcartServiceService);
  cart!: CartItems[];
  sumPrice!: number;
  shippingCost!: number;
  totalPrice!: number;

  ngOnInit(): void {
    this.shippingcart.cart$.subscribe((items) => {
      this.cart = items;
      this.sumPrice = this.shippingcart.totalPrice;
      this.shippingCost = this.shippingcart.shippingCost;
      this.totalPrice = this.shippingCost + this.sumPrice;
      
    })
  }

}
