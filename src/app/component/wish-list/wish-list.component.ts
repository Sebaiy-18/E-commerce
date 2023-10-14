import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit{
constructor(
  private _WishListService:WishListService ,
   private _ToastrService:ToastrService,
   private _CartService:CartService,
   private _Renderer2:Renderer2
   
   
   ){}

productData:any[] = [];
wishListData:string [] = [];

ngOnInit(): void {
  this._WishListService.getWishList().subscribe({
    next:(response)=>{
      // console.log(response);
      this.productData = response.data
      const newData =response.data.map( (item:any)=>  item._id);
      // console.log(newData);
      this.wishListData =newData
      
      
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
      // console.log(response);
      this._ToastrService.success(response.message)
      this.wishListData = response.data;

//--------------------------------------------------------//

      this._WishListService.getWishList().subscribe({
        next:(response)=>{
          this.productData = response.data;

        }
      }) 
    }
  })
}
addProduct( id:String ):void{
  this._CartService.addToCartItem(id).subscribe({
    next:(response)=>{
      console.log(response);
      this._CartService.cartNumber.next(response.numOfCartItems);
      console.log(this._CartService.cartNumber);
      

      this._ToastrService.success(response.message)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}




}
