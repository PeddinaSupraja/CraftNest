import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private service:CartService, private order:OrderService,private router:Router){}
  allitems:any;
  ngOnInit(){
    this.service.getCartByUsername(localStorage.getItem("loggedin")).subscribe((res)=>{
      this.allitems=res;
    })
  }
   loadCart() {
    this.service
      .getCartByUsername(localStorage.getItem("loggedin"))
      .subscribe((res: any) => {

        this.allitems = res;

        // Default quantity
        this.allitems.forEach((item: any) => {
          if (!item.quantity) {
            item.quantity = 1;
          }
        });

      });
  }

  // Increase Quantity
  increase(item: any) {
    item.quantity++;
  }

  // Decrease Quantity
  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Item Total
  getItemTotal(item: any): number {
    return item.price * item.quantity;
  }

  // Grand Total
  getGrandTotal(): number {

    let total = 0;

    this.allitems.forEach((item: any) => {
      total += item.price * item.quantity;
    });

    return total;
  }

  // Remove Product
  removeItem(index: number) {

    this.allitems.splice(index, 1);

  }

  // Place Order
  placeOrder(item: any) {

    const username = localStorage.getItem('loggedin');

    if (!username) {
      alert('Please login first');
      return;
    }

    const order = {
      ...item,
      username,
      orderId: 'CN' + Math.floor(Math.random() * 100000),
      orderDate: new Date().toLocaleDateString(),
      status: 'Processing',
      total: item.price * item.quantity
    };

    this.order.placeorder(order);
    alert(item.name + ' Ordered Successfully!');
    this.router.navigate(['/user/orders']);

  }
  checkout(){

  const username = localStorage.getItem("loggedin");

  this.allitems.forEach((item:any)=>{

    const order={

      ...item,

      orderId:'CN'+Math.floor(Math.random()*100000),

      orderDate:new Date().toLocaleDateString(),

      status:'Processing',

      total:item.price*item.quantity

    }

    this.order.placeorder(order);

  });

  this.service.removeAllByUsername(username);

  this.allitems=[];

  alert("Order Placed Successfully");

  this.router.navigate(['/user/orders']);

}
  

}
