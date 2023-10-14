import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassService {

  constructor(private _HttpClient:HttpClient) { }


// *=====forgotPassword======*

forgotPassword(userData: Object): Observable<any> {
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, userData);
}



verifyResetCode(userData: Object): Observable<any> {
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, userData);//verifyResetCode
}



resetPassword(userData: Object): Observable<any> {
  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, userData);
}



}
