import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
constructor(
  private _ProductsService:ProductsService,
  private _CartService:CartService,
  private _ToastrService:ToastrService,
  private _WishListService:WishListService
  ){}

/* `productData:any [] = [];` is declaring a variable named `productData` with the type `any[]` (an
array of any type). It is initializing the variable with an empty array. This variable is used to
store the data of products obtained from the API response. */
productData:any [] = [];
term:string = '';
wishListData:string [] = [];

ngOnInit(): void {
  this._ProductsService.getProduct().subscribe({
    next:(response)=>{
      console.log(response.data);
      this.productData = response.data
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  
}

addProduct( id:String ):void{
  this._CartService.addToCartItem(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}





addFav(prodId:string|undefined):void{
  this._WishListService.addToWishList(prodId).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message);
      this.wishListData = response.data;
      
    }
  })
}
removeFav(prodId:string|undefined):void{
  this._WishListService.removeItemOfFav(prodId).subscribe({
    next:(response)=>{
      console.log(response);
      this._ToastrService.success(response.message)
      this.wishListData = response.data;
      
    }
  })
}



}
