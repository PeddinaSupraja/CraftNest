import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishlist: any[] = [];

  addToWishlist(obj: any) {

  const exists = this.wishlist.find(
    item => item.id === obj.id && item.username === obj.username
  );

  if (exists) {
    return "Already in Wishlist";
  }

  this.wishlist.push(obj);
  return "Added to Wishlist";
}

  getWishlistByUsername(username: any) {
     console.log(this.wishlist);
    return of(this.wishlist.filter(item => item.username == username));
  }

  removeFromWishlist(id: any) {
    this.wishlist = this.wishlist.filter(item => item.id != id);
  }
}
