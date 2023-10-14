import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _BrandsService:BrandsService){}

  brandData:any [] = [];


  ngOnInit(): void {
    this._BrandsService.getBrand().subscribe({
      next:(response)=>{
        // console.log(response);
        this.brandData = response.data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  brandDetails( id:string ):void{
    this._BrandsService.getBrandDetails(id).subscribe({
      next:(response)=>{
        console.log(response);
        
       this.brandData = response.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}
