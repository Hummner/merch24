import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItems } from '../interfaces/cart-items';

@Injectable({
  providedIn: 'root'
})
export class ShippingcartServiceService {
  private cartSubject = new BehaviorSubject(<CartItems[]>[])
  cart$ = this.cartSubject.asObservable()




  loadLocalStorageCart() {
    const cart = localStorage.getItem("shippingcart")
    if (cart) {
      this.cartSubject.next(JSON.parse(cart))
    }
  }


  addItem(item: CartItems) {
    const cart = this.cartSubject.value
    if (this.checkItemDuplicate(item, cart)) return
    this.cartSubject.next([...cart, item])
    this.saveShippingCart([...cart, item]);
    console.log(this.cart$);

  }

  checkItemDuplicate(newItem: CartItems, cart: CartItems[]) {
    const item = cart.find(i => newItem.sku === i.sku);

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
    console.log(index);

    if (index !== -1) {
      cart.splice(index, 1);
      this.saveShippingCart(cart)
      this.cartSubject.next([...cart]);
    }
  }
}
