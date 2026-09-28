import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  constructor(private order: OrderService) {}

  orders: any[] = [];

  ngOnInit() {

    this.order
      .getOrdersByUsername(localStorage.getItem('loggedin'))
      .subscribe((res: any) => {

        this.orders = res;

      });

  }

}

