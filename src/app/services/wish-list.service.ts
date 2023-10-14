import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient , private _ActivatedRoute:ActivatedRoute) { }
  myToken:any ={
    token: localStorage.getItem('token')
  }

baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`;

  addToWishList(productId:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl +`wishlist`,
    
    {
      productId: productId
    },
    {
      headers:this.myToken
    }

    )
  }

  getWishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `wishlist`,
    {
      headers:this.myToken
    }
    )
  }
  removeItemOfFav(prodId:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`,
    {
      headers:this.myToken
    }
    )
  }

}
