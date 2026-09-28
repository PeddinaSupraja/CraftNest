// import { Component } from '@angular/core';
// import { ProductsService } from '../../service/products.service';
// import { OrderService } from '../../service/order.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-adminhome',
//   templateUrl: './adminhome.component.html',
//   styleUrl: './adminhome.component.css'
// })
// export class AdminhomeComponent {
// totalProducts: number = 0;
//   totalOrders: number = 0;
//   totalRevenue: number = 0;
//   pendingOrders: number = 0;

//   recentOrders: any[] = [];

//   constructor(
//     private productService: ProductsService,
//     private orderService: OrderService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {

//     // Admin Authentication
//     if (localStorage.getItem("role") != "admin") {

//       this.router.navigateByUrl("");

//       return;

//     }

//     // Products Count
//     this.totalProducts = this.productService.products.length;

//     // Orders
//     this.recentOrders = this.orderService.allorders;

//     this.totalOrders = this.recentOrders.length;

//     // Revenue
//     this.totalRevenue = 0;

//     this.pendingOrders = 0;

//     this.recentOrders.forEach((order: any) => {

//       this.totalRevenue += Number(order.total);

//       if (order.status == "Processing") {

//         this.pendingOrders++;

//       }

//     });

//   }

//   logout() {

//     localStorage.removeItem("loggedin");
//     localStorage.removeItem("role");

//     this.router.navigateByUrl("");

//   }
// }
import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {

  products: any[] = [];
  orders: any[] = [];
  recentOrders: any[] = [];
  totalProducts = 0;
  totalOrders = 0;
  totalRevenue = 0;
  pendingOrders = 0;

  constructor(
    private productService: ProductsService,
    private orderService: OrderService
  ) {}

  ngOnInit() {

    this.loadDashboard();

  }
  loadDashboard() {

  this.productService.getproducts().subscribe((res: any) => {

    this.products = res;

    this.totalProducts = this.products.length;

  });
  this.orderService.getAllOreders().subscribe((res: any) => {

  this.orders = res;

  this.totalOrders = this.orders.length;

  this.calculateRevenue();

  this.calculatePending();

  this.recentOrders = this.orders.slice(-5).reverse();

});
}
  calculateRevenue() {

    this.totalRevenue = 0;

    this.orders.forEach((order: any) => {

      this.totalRevenue += Number(order.total);

    });

  }

  calculatePending() {

    this.pendingOrders = this.orders.filter(

      (order: any) => order.status === 'Processing'

    ).length;

  }

}