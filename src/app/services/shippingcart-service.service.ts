import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItems } from '../interfaces/cart-items';

@Injectable({
  providedIn: 'root'
})
export class ShippingcartServiceService {
private cartSubject = new BehaviorSubject(<CartItems[]>[])
cart$ = this.cartSubject.asObservable()


addItem(item: CartItems) {
  const cart = this.cartSubject.value
  this.cartSubject.next([...cart, item])
  console.log(this.cart$);
  
}
}
