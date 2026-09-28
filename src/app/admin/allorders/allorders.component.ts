import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent {
    orders: any[] = [];
  searchText = '';

  constructor(private service: OrderService) {}

  ngOnInit() {
    this.service.getAllOreders().subscribe((res: any) => {
      this.orders = res;
    });
  }

  filteredOrders() {

    if (!this.searchText.trim()) {
      return this.orders;
    }

    return this.orders.filter((o: any) =>

      o.username.toLowerCase().includes(this.searchText.toLowerCase()) ||

      (o.productName || o.name).toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

  updateStatus(order: any) {

    this.service.updateOrderStatus(order.orderId, order.status);

    alert("Order status updated successfully.");

  }
}
