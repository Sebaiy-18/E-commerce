import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
constructor(private _CategoryService:CategoryService ,private _ActivatedRoute:ActivatedRoute){}

  categoryData:any [] =[];
  categoryId:any = '';

  ngOnInit(): void {
    this._CategoryService.getCategory().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.categoryData =response.data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    });

    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.categoryId =  params.get('id');
        // console.log(this.categoryId); 
      }
    })
  }


}
