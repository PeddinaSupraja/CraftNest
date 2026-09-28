import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-detailscomponent',
  templateUrl: './detailscomponent.component.html',
  styleUrl: './detailscomponent.component.css'
})
export class DetailscomponentComponent {
   constructor(private acr:ActivatedRoute,private user:ProductsService, private wish:WishlistService , private cartS:CartService,private orderS:OrderService,private router:Router){}
  productid:any;myproduct:any;
  username:any;
  ngOnInit(){
    this.username=localStorage.getItem("loggedin")
    this.productid=this.acr.snapshot.paramMap.get("pid");
    this.myproduct=this.user.getProductsById(this.productid)
  }
  cartitem:any;
  addNow(){
  this.cartitem = {
    username: localStorage.getItem("loggedin"),
    quantity: this.quantity,
    ...this.myproduct
  }
  alert(this.cartS.addtoCart(this.cartitem));
}
  placeobj:any;address:any;phone:any;
  placeorder(){
    if (!this.username) {
      alert('Please login first');
      return;
    }

    this.placeobj = {
      ...this.myproduct,
      username: this.username,
      address: this.address || 'Not provided',
      phone: this.phone || 'Not provided',
      quantity: this.quantity,
      orderId: 'CN' + Math.floor(Math.random() * 100000),
      orderDate: new Date().toLocaleDateString(),
      status: 'Processing',
      total: this.myproduct.price * this.quantity
    };

    this.orderS.placeorder(this.placeobj);
    alert('Order Placed Successfully!');
    this.router.navigate(['/user/orders']);
  }
quantity = 1;
increaseQuantity(){
    this.quantity++;
}
decreaseQuantity(){
    if(this.quantity > 1){
        this.quantity--;
    }
}
wishlistItem:any;

addWishlist() {

  console.log("Button Clicked");

  console.log(this.myproduct);

  const obj = {

    username: localStorage.getItem("loggedin"),

    ...this.myproduct

  };

  console.log(obj);

  const msg = this.wish.addToWishlist(obj);

  console.log(msg);

  this.router.navigate(['/user/wishlist']);

}
}
