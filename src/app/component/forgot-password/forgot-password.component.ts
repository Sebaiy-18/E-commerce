import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PassService } from 'src/app/services/pass.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  succesMessage: String = '';
  errorMessage: String = '';
  errorMessage_2: String = '';



  constructor(private _PassService: PassService, private _Router: Router) { }


  forgotForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })



  forgotPassword(forgotForm: FormGroup) {
    console.log(forgotForm)

    this._PassService.forgotPassword(forgotForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.succesMessage = response.message;
        this.errorMessage = '';
        document.querySelector('.forgotpassword')?.classList.add('d-none')
        document.querySelector('.VerfiyPassword')?.classList.remove('d-none')
      },
      error: (error) => {
        console.log(error)
        this.errorMessage = error.error.message;
      }
    })

  }





  VerfiyForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  })

  VerfiyCode(verfiyCode: FormGroup) {
    console.log(verfiyCode)
    this._PassService.verifyResetCode(verfiyCode.value).subscribe({
      next: (response) => {
        console.log(response)
        if (response.status == 'Success') {
          this._Router.navigate(['/resetPassword'])
        }
      },
      error: (err) => {
        this.errorMessage_2 = err.error.message;
      },
    })
  }


  newPasswordForm: FormGroup = new FormGroup({
    newPass: new FormControl(null, [Validators.required])
  })

  newPassword(newPassword: FormGroup) {
    console.log(newPassword)
    this._PassService.verifyResetCode(newPassword.value).subscribe({
      next: (response) => {
        console.log(response)
        if (response.status == 'Success') {
          this._Router.navigate(['/resetPassword'])
        }
      },
      error: (err) => {
        this.errorMessage_2 = err.error.message;
      },
    })
  }




}
