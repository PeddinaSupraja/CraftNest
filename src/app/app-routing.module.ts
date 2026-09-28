import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { ViewproductsComponent } from './user/viewproducts/viewproducts.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { OrdersComponent } from './user/orders/orders.component';
import { CartComponent } from './user/cart/cart.component';
import { DetailscomponentComponent } from './user/detailscomponent/detailscomponent.component';
import { ManageproductsComponent } from './admin/manageproducts/manageproducts.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddproductsComponent } from './admin/addproducts/addproducts.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { AllordersComponent } from './admin/allorders/allorders.component';
import { UserhomeComponent } from './user/userhome/userhome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserdashboardComponent,
    children:[
      {path:'userhome',component:UserhomeComponent},
      {path:'products',component:ViewproductsComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'orders',component:OrdersComponent},
      {path:'cart',component:CartComponent},
      {path:'details/:pid',component:DetailscomponentComponent}
    ]
   },
  { path: 'admin', component: AdmindashboardComponent,
    children:[
      {path:'home',component:AdminhomeComponent},
      {path:'manage',component:ManageproductsComponent},
      {path:'add',component:AddproductsComponent},
      {path:'update-product/:id',component:UpdateproductComponent},
      {path:'orders',component:AllordersComponent}
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
