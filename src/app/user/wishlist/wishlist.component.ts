import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  items:any=[];

  constructor(private wish:WishlistService){}

  ngOnInit(){

    this.wish
    .getWishlistByUsername(localStorage.getItem("loggedin"))
    .subscribe((res:any)=>{

      this.items=res;

    });

  }

  remove(id:any){

    this.wish.removeFromWishlist(id);

    this.ngOnInit();

  }
}
