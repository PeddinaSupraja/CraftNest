import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
   cart:any[]=[];
  addtoCart(obj:any){
    this.cart.push(obj);
    return "add to cart";
  }
  getCartByUsername(uname:any){
    return of(this.cart.filter(pro=>pro.username==uname));
  }
  getCartLength(){
    return this.cart.length;
  }
  removeAllByUsername(username:any){

  this.cart = this.cart.filter(item => item.username != username);

}

getCart(){

  return this.cart;

}
}
