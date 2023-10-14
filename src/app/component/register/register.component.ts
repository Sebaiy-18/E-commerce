import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators, FormControlOptions} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}

  errMessage:string = '';
  isLoading:boolean = false;

  registerForm:FormGroup = new FormGroup({

    name:new FormControl('' , [Validators.required ,Validators.minLength(3),Validators.maxLength(12)]),
    email:new FormControl('' , [Validators.required,Validators.email]),
    password:new FormControl('' , [Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('' , [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])

  } ,{ validators:[this.confirmPassword]} as FormControlOptions );

  //custom Validation
  confirmPassword(group:FormGroup):void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (rePassword?.value  === '') {
      rePassword?.setErrors({required:true})
      
    }
    else if (password?.value   !== rePassword?.value) {
      rePassword?.setErrors({misMatch:true})
    }

  }


  handleForm(): void{
    this.isLoading = true;

    const userData = this.registerForm.value;
    if (this.registerForm.valid == true){

      this._AuthService.register(userData).subscribe({
        next: (response) =>{
            //Move to Login
            this._Router.navigate( ['/login'] );
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
