import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{

  constructor(
      private _ActivatedRoute:ActivatedRoute ,
      private _ProductsService:ProductsService,
      private _CartService:CartService,
      private _ToastrService:ToastrService

     ){}

  productId:string|null ='';
  productsDetails:any ={};

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId = params.get('id')
      }
    });


    this._ProductsService.getProductDetails( this.productId  ).subscribe({
      next:(response)=>{
        this.productsDetails = response.data
        console.log(response.data)
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

  productOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    navText: ['', ''],
    items:1,
    nav: true
  }
}
