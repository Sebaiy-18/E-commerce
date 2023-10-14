import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandDetails } from 'src/app/interFace/brand-details';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit{
  constructor(private _BrandsService:BrandsService , private _ActivatedRoute:ActivatedRoute){}

  brandId:any = '';
  brandData:any = {};

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.brandId =  params.get('id');
    }
  });
  this._BrandsService.getBrandDetails( this.brandId  ).subscribe({
    next:(response)=>{
      this.brandData = response.data
      console.log(response.data)
    }
  })
}
}
