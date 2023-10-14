import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService, private _Renderer2:Renderer2){}

cartDetails:any = {};

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next:(  {data}  )=>{
        this.cartDetails = data;
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  removeProduct(id:string):void{
    this._CartService.removeCartItem(id).subscribe({
      next:(Response)=>{
        console.log(Response);
        this.cartDetails = Response.data
        
      }
    })
  }

  changeCount(count:number , id:string , element1:HTMLButtonElement , element2:HTMLButtonElement):void{

    /* The `if(count >= 1)` condition is checking if the `count` value is greater than or equal to 1.
    If the condition is true, it means that the user wants to update the count of the cart item to a
    value greater than or equal to 1. */
    if(count >= 1){
      this._Renderer2.setAttribute(element1 , 'disabled' , 'true')
      this._Renderer2.setAttribute(element2 , 'disabled' , 'true')
   

  
    this._CartService.updateCountItem(id , count).subscribe({
      next: (response) =>{
        // console.log(response);

        /* `this.cartDetails = response.data` is assigning the value of `response.data` to the
        `cartDetails` property of the `CartComponent` class. This is done to update the
        `cartDetails` object with the latest data received from the server after removing or
        updating a cart item. */
        this.cartDetails = response.data
        this._Renderer2.removeAttribute(element1 , 'disabled');
        this._Renderer2.removeAttribute(element2 , 'disabled');
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element1 , 'disabled');
        this._Renderer2.removeAttribute(element2 , 'disabled');
      }
    
    })
  }
  }

  clear():void{
    this._CartService.ClearCart().subscribe({
      next:(response)=>{
        // console.log(response);
        if (response.message === "success") {
          this.cartDetails = {};
        }
        
      }
    })
  }


}
