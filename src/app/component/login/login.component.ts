import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  errMessage:string = '';
  isLoading:boolean = false;

  loginForm:FormGroup = new FormGroup({

    email:new FormControl('' , [Validators.required,Validators.email]),
    password:new FormControl('' , [Validators.required,Validators.pattern(/^\w{6,}$/)]),

  });

  handleForm(): void{
    this.isLoading = true;

    const userData = this.loginForm.value;
    if (this.loginForm.valid == true){

      this._AuthService.login(userData).subscribe({
        next: (response) =>{

          //localStorage token
          localStorage.setItem('token',response.token)

            //Move to Login
            this._Router.navigate( ['/home'] );
            this.isLoading = false; //hidden
        },
        error:(err)=>{

          this.errMessage = err.error.message;
          this.isLoading = false; //hidden
        },
      });
    }
  }



}
