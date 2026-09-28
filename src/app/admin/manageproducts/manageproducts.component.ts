import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrl: './manageproducts.component.css'
})
export class ManageproductsComponent {
    products: any[] = [];

  searchText = '';

  constructor(
    private service: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {

    this.products = this.service.products;

  }

  filteredProducts() {

    if (this.searchText == '') {

      return this.products;

    }

    return this.products.filter((item: any) =>

      item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||

      item.category.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

  editProduct(id: number) {

    this.router.navigate(['/admin/update-product', id]);

  }

  deleteProduct(id: number) {

    const result = confirm("Are you sure you want to delete this product?");

    if (result) {

      this.products = this.products.filter(item => item.id != id);

      this.service.products = this.products;

      alert("Product Deleted Successfully");

    }

  }
}
