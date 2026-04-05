import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItems } from '../interfaces/cart-items';

@Injectable({
  providedIn: 'root'
})
export class ShippingcartServiceService {
  private cartSubject = new BehaviorSubject(<CartItems[]>[])
  cart$ = this.cartSubject.asObservable()
  shippingCost = 5.99



  loadLocalStorageCart() {
    const cart = localStorage.getItem("shippingcart")
    if (cart) {
      this.cartSubject.next(JSON.parse(cart))
      this.totalPrice


    }
  }

  get totalPrice() {
    const prices = this.cartSubject.value.map(item => item.price)
    console.log("Total Price");

    return prices.reduce((a, b) => a + b);



  }

  get totalAmount() {
    const totalAmount = this.cartSubject.value.map(item => item.amount)
    return totalAmount.reduce((a, b) => a + b);
  }




  addItem(item: CartItems) {
    const cart = this.cartSubject.value
    if (this.checkItemDuplicate(item, cart)) return
    this.cartSubject.next([...cart, item])
    this.saveShippingCart([...cart, item]);

  }

  checkItemDuplicate(newItem: CartItems, cart: CartItems[]) {
    const item = cart.find(i => newItem.sku === i.sku && newItem.name === i.name && newItem.id === i.id);

    if (item) {
      this.addAmount(newItem, item, cart)
      this.saveShippingCart(cart);
      return true
    }

    return false
  }

  addAmount(newItem: CartItems, item: CartItems, cart: CartItems[]) {
    item.amount = item.amount + newItem.amount
    this.cartSubject.next([...cart])
  }

  saveShippingCart(cart: CartItems[]) {
    localStorage.setItem('shippingcart', JSON.stringify(cart));
    const locStorage = localStorage.getItem('shippingcart');


    if (locStorage == null || locStorage == "[]") {
      localStorage.removeItem('shippingcart');
    }
  }

  delelteItem(item: CartItems) {
    const cart = this.cartSubject.value;
    const index = cart.indexOf(item);


    if (index !== -1) {
      cart.splice(index, 1);
      this.saveShippingCart(cart)
      this.cartSubject.next([...cart]);
    }
  }
}
