import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);


/* The `myToken` variable is an object that is used to store the token retrieved from the
`localStorage`. The `localStorage.getItem('token')` method retrieves the value of the 'token' key
from the browser's local storage. This token is then assigned to the `token` property of the
`myToken` object. */
  myToken:any ={
    token: localStorage.getItem('token')
  }
/* ------------------------------------------------*/

/* The `addToCartItem` method is used to add a product to the user's cart. It takes a `productId` as a
parameter, which is an object representing the product to be added. */
  addToCartItem(productId: object): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      productId: productId
    },
    {
    headers:this.myToken
    }
    
    )
  };

/* ------------------------------------------------*/



/**
 * The function `getCartUser()` makes an HTTP GET request to retrieve the user's cart data from a
 * specific API endpoint.
 * @returns an Observable of type 'any'.
 */
  getCartUser():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:this.myToken
    }

    )
  }

  /* ------------------------------------------------*/



/**
 * The function `removeCartItem` sends a DELETE request to the specified API endpoint to remove a cart
 * item with the given product ID.
 * @param {string} productId - The `productId` parameter is a string that represents the unique
 * identifier of the product that needs to be removed from the cart.
 * @returns an Observable of type 'any'.
 */
  removeCartItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers:this.myToken
    }

    )
  }
  /* ------------------------------------------------*/


/**
 * The function `updateCountItem` sends a PUT request to update the count of an item in a shopping cart
 * using the provided id and countNum.
 * @param {string} id - The id parameter is a string that represents the unique identifier of the item
 * in the cart that you want to update the count for.
 * @param {number} countNum - The countNum parameter is the new count value that you want to update for
 * the item with the specified id.
 * @returns an Observable of type 'any'.
 */
  updateCountItem(id:string , countNum:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count: countNum
    },
    {
      headers:this.myToken
    }

    
    )

  }

  /* ------------------------------------------------*/


/**
 * The `checkOut` function sends a POST request to the specified API endpoint with the provided cart ID
 * and cart details, including the shipping address, and returns an Observable.
 * @param {string} cart_id - A string representing the ID of the cart.
 * @param {object} cartDetails - An object containing the shipping address details for the checkout
 * process.
 * @returns an Observable of type 'any'.
 */
  checkOut(cart_id:string , cartDetails:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart_id}?url=http://localhost:4200`,
    {
      shippingAddress:cartDetails
    },
    {
      headers:this.myToken
    }
    
    )
  }

  /* ------------------------------------------------*/
  ClearCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:this.myToken
    }

    )
  }



}
