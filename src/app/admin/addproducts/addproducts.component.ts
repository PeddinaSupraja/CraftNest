import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  product = {

    id: 0,
    name: '',
    category: '',
    description: '',
    price: 0,
    rating: 5,
    image: '',
    stock: 0

  };

  constructor(
    private productService: ProductsService,
    private router: Router
  ){}

  addProduct() {

  this.product.id = this.productService.products.length + 1;

  this.productService.addProduct({ ...this.product });

  alert("Product Added Successfully");

  this.router.navigateByUrl('/admin/manage-products');

}
}
