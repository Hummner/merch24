import { Component, HostListener, OnInit, TemplateRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from "@angular/router";
import { ViewportScroller } from '@angular/common';
import { CommonModule } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { ShippingcartServiceService } from '../../services/shippingcart-service.service';
import { CartItems } from '../../interfaces/cart-items';
import {MatBadgeModule} from '@angular/material/badge';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterLink, CommonModule, MatInputModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent implements OnInit {
  viewPosition!: [number, number];
  headerOpacity = true;

  private offcanvasService = inject(NgbOffcanvas);
  private shippingcartService = inject(ShippingcartServiceService);
  cart: CartItems[] = [];



  constructor(private view: ViewportScroller) {
    this.viewPosition = view.getScrollPosition()


  }


  @HostListener('window:scroll') // for window scroll events
  onScroll() {
    this.viewPosition = this.view.getScrollPosition();

    let sum = this.viewPosition.reduce((a, b) => a + b, 0)
    if (sum == 0) {
      this.headerOpacity = true;
    } else {
      this.headerOpacity = false
    }
  }

  getOpacity() {
    return this.headerOpacity ? 'opacity' : '-'
  }

  openCart(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  ngOnInit() {
    this.shippingcartService.loadLocalStorageCart()
    this.shippingcartService.cart$.subscribe(items => this.cart = items);

  }

  itemPrice(item: CartItems, value: string): number {
    const number= Number(value);
    item.total = number * item.price;
    console.log("Amount: ", number, " - Item price: ", item.price);
    

    return item.total  = number * item.price;
  }

  deleteItemFromCart(item: CartItems) {
    this.shippingcartService.delelteItem(item);
  }

  
  
}

