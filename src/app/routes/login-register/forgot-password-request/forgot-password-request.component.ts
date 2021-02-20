import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel, RegisterModel } from '@app-models/user';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'forgot-password-request',
  templateUrl: './forgot-password-request.component.html',
  styleUrls: ['./forgot-password-request.component.scss']
})
export class ForgotPasswordRequestComponent implements OnInit {

  errors: any[] = [];
  loginForm = this.fb.group({
    email : new FormControl('',[Validators.required,Validators.email]),
  })
  submitDisable :boolean = false;
 
  constructor(private route:Router, private auth:AuthService, private fb:FormBuilder, private app:ApplicationService) { }

  ngOnInit(): void {
  }

  resetpassword() {
    this.errors = [];
    if(this.loginForm.valid){
      const loginForm : any = {
        email: this.loginForm.get('email').value,
      };
      this.submitDisable = true;
      this.app.openSnackBar('Sending the reset password email', 'loading', 120000);
      this.auth.resetPasswordRequest(loginForm).subscribe(x => {
        this.route.navigate(['sign']);
        this.submitDisable = false;
        this.app.openSnackBar("An reset password email has been sent to your email.","success");
      },(err:HttpErrorResponse) => {
          this.app.errorHandler(err);
          this.submitDisable = false;
      })
    } else {
      let errorList = this.app.formErrorHandler(this.loginForm);
      errorList.forEach(error => { 
          this.errors.push(LoginModel.getErrorMessage(error.field,error.error))
      })
    }
    
  }
}
