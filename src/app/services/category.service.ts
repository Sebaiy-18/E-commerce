import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService  {

  constructor(private _HttpClient:HttpClient) { }

  getCategory():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/`)

  }

  getCategoryDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
  }


}
