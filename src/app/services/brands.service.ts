import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
  getBrand():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getBrandDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
   }
}
