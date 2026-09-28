import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {
   product: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = { ...this.service.getProductsById(id) };

  }

  updateProduct() {

    this.service.updateProduct(this.product);

    alert("Product Updated Successfully");

    this.router.navigate(['/admin/manage-products']);

  }
}
