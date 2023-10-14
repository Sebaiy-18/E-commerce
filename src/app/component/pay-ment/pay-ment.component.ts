import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pay-ment',
  templateUrl: './pay-ment.component.html',
  styleUrls: ['./pay-ment.component.scss']
})
export class PayMentComponent implements OnInit{
  constructor(
    private _FormBuilder:FormBuilder ,
     private _ActivatedRoute:ActivatedRoute ,
      private _CartService:CartService
      ) {}

/* The line `id:any = '';` is declaring a variable `id` with the type `any` and initializing it with an
empty string `''`. */
    id:any = '';
/* ------------------------------------------------*/


/**
 * The ngOnInit function in TypeScript is used to subscribe to the paramMap of the ActivatedRoute and
 * retrieve the value of the 'id' parameter.
 */
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.id =  params.get('id');
      }
    })
  }
  /* ------------------------------------------------*/


/* The `checkForm` variable is creating an instance of the `FormGroup` class using the `group` method
of the `_FormBuilder` object. */
  checkForm:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:['',Validators.pattern(/^01[0125][0-9]{8}$/)],
    city:['']
  })
/* ------------------------------------------------*/




/* The `handleForm()` function is a method that is called when the form is submitted. It logs the value
of the `checkForm` FormGroup to the console and assigns the value of `checkForm` to the
`cartDetails` variable. */
  handleForm():void{
    console.log(this.checkForm.value);
    const cartDetails = this.checkForm.value;

/* ------------------------------------------------*/

/* The code `this._CartService.checkOut(this.id , cartDetails).subscribe({ next:(response)=>{
window.open(response.session.url); } })` is making a HTTP request to the `checkOut` method of the
`CartService` class with the `id` and `cartDetails` as parameters. */
    this._CartService.checkOut(this.id , cartDetails).subscribe({
      next:(response)=>{
        // console.log(response.session.url);
        window.open(response.session.url);
      }
    })
    
  }
}
