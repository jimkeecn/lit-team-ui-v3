import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "@app-services/auth/auth.service";
import { ApplicationService } from "@app-services/app/application.service";
import { LoginModel } from '@app-models/user';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors: any[] = [];
  loginForm = this.fb.group({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  })
  
  submitDisable: boolean = false;

   constructor(private route:Router, private auth:AuthService, private fb:FormBuilder, private app:ApplicationService) { }


  ngOnInit(): void {
  }

  login() {
    this.errors = [];
    if(this.loginForm.valid){
      const loginForm : LoginModel = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };
      this.submitDisable = true;
      this.app.openSnackBar('Logging to your account..', 'loading', 120000);
      this.auth.login(loginForm).subscribe(x => {
        this.submitDisable = false;
        this.app.openSnackBar('Welcome to Lit Team', 'success');
        this.route.navigate(['home']);
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    } else {
      let errorList = this.app.formErrorHandler(this.loginForm);
      errorList.forEach(error => { 
          this.errors.push(LoginModel.getErrorMessage(error.field,error.error))
      })
    }
    
  }
  
}
