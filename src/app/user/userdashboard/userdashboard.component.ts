import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private bs:Router){}
  username:any;

  ngOnInit(){
    if(localStorage.getItem("loggedin")){
      this.username=localStorage.getItem("loggedin")
    }
    else{
      this.bs.navigateByUrl('/')
    }
  }
  logout() {

  localStorage.clear();

  this.bs.navigateByUrl('');

}
}
