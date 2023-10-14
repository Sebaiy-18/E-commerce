import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit{
  constructor(private _CategoryService:CategoryService,private _ActivatedRoute:ActivatedRoute){}
  categoryData:any [] =[];


/* The line `categoryId:any = '';` is declaring a variable `categoryId` with the type `any` and
initializing it with an empty string `''`. This variable is used to store the category ID that is
obtained from the route parameter. */
  categoryId:any = '';


ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.categoryId =  params.get('id');
    }
  });
  this._CategoryService.getCategoryDetails( this.categoryId  ).subscribe({
    next:(response)=>{
      // this.categoryData = response.data
      console.log(response.data)
    },
/* The `error` function is a callback function that is executed when an error occurs during the
execution of the `getCategoryDetails` method. It takes an `err` parameter which represents the error
object. In this case, the function simply logs the error object to the console for debugging
purposes. */
    error:(err)=>{
      console.log(err);
      
    }
  })
}



}
