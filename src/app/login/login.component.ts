import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  reqpwd:any;
  constructor(private router: Router) {}
  checklogin() {
  if (!this.username || !this.password) {
    alert("Enter Username and Password");
    return;
  }
  this.reqpwd = this.username.slice(0,3) + "123";
  // Admin Login
  if(this.username=="admin" && this.password=="admin123"){
    localStorage.setItem("loggedin",this.username);
    localStorage.setItem("role","admin");
    this.router.navigateByUrl("/admin/home");
  }
  // User Login
  else if(this.password==this.reqpwd){
    localStorage.setItem("loggedin",this.username);
    localStorage.setItem("role","user");
    this.router.navigateByUrl("/user/userhome");
  }
  else{
    alert("Invalid Username or Password");
  }
}
}
