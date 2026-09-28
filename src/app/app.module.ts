import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { ViewproductsComponent } from './user/viewproducts/viewproducts.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { OrdersComponent } from './user/orders/orders.component';
import { CartComponent } from './user/cart/cart.component';
import { DetailscomponentComponent } from './user/detailscomponent/detailscomponent.component';
import { ManageproductsComponent } from './admin/manageproducts/manageproducts.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddproductsComponent } from './admin/addproducts/addproducts.component';
import { AllordersComponent } from './admin/allorders/allorders.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { UserhomeComponent } from './user/userhome/userhome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ViewproductsComponent,
    WishlistComponent,
    OrdersComponent,
    CartComponent,
    DetailscomponentComponent,
    ManageproductsComponent,
    AdminhomeComponent,
    AddproductsComponent,
    AllordersComponent,
    UpdateproductComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
