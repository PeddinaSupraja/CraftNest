import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  allorders:any[]=[];
  placeorder(obj:any){
    this.allorders.push(obj);
    return "ordee placed successfully"
  }
  getAllOreders(){
    return of(this.allorders)
  }
  getOrdersByUsername(uname:any){
    return of(this.allorders.filter(ob=>ob.username==uname))
  }
  updateOrderStatus(orderId: number, status: string) {
  const order = this.allorders.find(o => o.orderId === orderId);
  if (order) {
    order.status = status;
  }
}
}
