import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrl: './viewproducts.component.css'
})
export class ViewproductsComponent {
  constructor(private service:ProductsService){}
  searchText: string = '';
  allProducts: any[] = [];
  filteredProducts: any[] = [];
  products: any; // kept for compatibility if other code references it

  categories: string[] = ['All','Pottery','Jewelry','Crochet','Paintings','Home Decor','Candles'];
  selectedCategory: string = 'All';

  ngOnInit(){
    this.service.getproducts().subscribe((res:any)=>{
      this.allProducts = res || [];
      this.products = this.allProducts;
      this.applyFilter();
    })
  }

  selectCategory(cat:string){
    this.selectedCategory = cat;
    this.applyFilter();
  }

  applyFilter(){
    let filtered = this.allProducts.slice();
    if(this.selectedCategory && this.selectedCategory !== 'All'){
      const cat = this.selectedCategory.toLowerCase();
      filtered = filtered.filter(p => (p.category || '').toString().toLowerCase().includes(cat));
    }
    if(this.searchText && this.searchText.trim() !== ''){
      const q = this.searchText.toLowerCase();
      filtered = filtered.filter(p => (p.name || '').toString().toLowerCase().includes(q) || (p.category || '').toString().toLowerCase().includes(q));
    }
    this.filteredProducts = filtered;
  }
}
