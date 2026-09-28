import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {
  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {

    this.productService.getproducts().subscribe((res:any)=>{

      this.products = res.slice(0,8);

    });

  }
}
