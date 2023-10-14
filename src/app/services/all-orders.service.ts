import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllOrdersService {

  constructor(private _HttpClient:HttpClient) { }

  getOrders():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)

  }
}
