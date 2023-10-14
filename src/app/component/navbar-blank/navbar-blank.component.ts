import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {
constructor(private _Router:Router , private _CartService:CartService){}
cartCount:number = 0;

ngOnInit(): void {
 this._CartService.cartNumber.subscribe({
  next:(num)=>{
    this.cartCount = num;
  }
 })
}

  signOut():void{
    localStorage.removeItem('token')
    this._Router.navigate(['/login'])
  }

}
