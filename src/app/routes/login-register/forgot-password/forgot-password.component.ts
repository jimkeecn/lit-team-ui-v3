import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel, RegisterModel } from '@app-models/user';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  token:string;
  email:string;
  errors: any[] = [];
  submitDisable: boolean = false;
  registerForm = this.fb.group({
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    confirmPassword : new FormControl('',[Validators.required]),
  },{validators:RegisterModel.passwordMatchValidator})

  constructor(private fb: FormBuilder, private auth: AuthService,
    private route: Router, private app: ApplicationService,
    public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      console.log(params);
      if(params){
         this.token = params.get('token');
         this.email = params.get('email');
      }
    })
  }

  resetpassword() {
    this.errors = [];
    console.log(this.registerForm);
    if(this.registerForm.valid){
      const registerForm : any = {
        password: this.registerForm.get('password').value,
        confirmPassword: this.registerForm.get('password').value,
        email: this.email,
        token:this.token
      };
      this.submitDisable = true;
      this.app.openSnackBar('Changing your password.', 'loading', 120000);
      this.auth.resetPassword(registerForm).subscribe(x => {
        this.submitDisable = false;
        this.route.navigate(['sign']);
        this.app.openSnackBar('You have changed your password.', 'success');
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    } else {
      let errorList = this.app.formErrorHandler(this.registerForm);
      errorList.forEach(error => { 
          this.errors.push(RegisterModel.getErrorMessage(error.field,error.error))
      })
    }
    
  }

}
