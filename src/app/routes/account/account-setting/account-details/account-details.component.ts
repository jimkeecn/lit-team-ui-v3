import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "@app-services/auth/auth.service";
import { ApplicationService } from "@app-services/app/application.service";
import { LoginModel, MyFullDetailExtend } from '@app-models/user';

@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  errors: any[] = [];
  detailForm = this.fb.group({
    phone: new FormControl('',[Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
    gameId : new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(3)]),
  })
  
  submitDisable: boolean = false;

   constructor(private route:Router, public auth:AuthService, private fb:FormBuilder, private app:ApplicationService) { }

  ngOnInit(): void {
    this.auth.currentUserSubject.subscribe(x => { 
      const phone = x.user ? x.user.phone : null;
      this.detailForm.patchValue({
        phone: phone,
        gameId: x.user ? x.user.gameId : null
      });
      if (x.user) {
        if (x.user.isVerified) {
          this.detailForm.get('phone').disable();
        }
      }
    })
  }


  save() {
    this.errors = [];
    if(this.detailForm.valid){
      const detailForm : MyFullDetailExtend = {
        phone: this.detailForm.get('phone').value,
        gameId: this.detailForm.get('gameId').value
      };
      this.submitDisable = true;
      this.app.openSnackBar('Saving information', 'loading', 120000);
      this.auth.updateAccountDetails(detailForm).subscribe(x => {
        this.submitDisable = false;
        this.app.openSnackBar('You have successfully update your detail', 'success');
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    } else {
      let errorList = this.app.formErrorHandler(this.detailForm);
      errorList.forEach(error => { 
          this.errors.push(MyFullDetailExtend.getErrorMessage(error.field,error.error))
      })
    }
    
  }
}
