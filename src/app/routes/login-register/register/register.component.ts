import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from '@app-models/user';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitDisable : boolean = false
  errors: any[] = [];
  registerForm = this.fb.group({
    email : new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    confirmPassword : new FormControl('',[Validators.required]),
    gameId : new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(3)]),
  },{validators:RegisterModel.passwordMatchValidator})

  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router,private app:ApplicationService) { }

  ngOnInit(): void {
  }

  register() {
    this.errors = [];
    console.log(this.registerForm);
    if(this.registerForm.valid){
      const registerForm : RegisterModel = {
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,
        confirmPassword: this.registerForm.get('password').value,
        gameId : this.registerForm.get('gameId').value
      };
      this.submitDisable = true;
      this.app.openSnackBar('We are creating new account for you.', 'loading', 120000);
      this.auth.register(registerForm).subscribe(x=>{
        this.route.navigate(['sign']);
        this.submitDisable = false;
        this.app.openSnackBar('Please check your email, We have sent you a confirmation email.','success',10000)
      }, (err: HttpErrorResponse) => {
          this.app.errorHandler(err);
          this.submitDisable = false;
      })
    } else {
      let errorList = this.app.formErrorHandler(this.registerForm);
      errorList.forEach(error => { 
          this.errors.push(RegisterModel.getErrorMessage(error.field,error.error))
      })
      
    }
    
  }

}
