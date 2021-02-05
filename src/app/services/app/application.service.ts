import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Location } from "@angular/common";
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MemberRequestViewModel, MyFullDetail } from '../../models/user';
import { formErrorState } from '../../models/appState';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(public route: Router,location: Location,private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.route.events.subscribe(val => { 
      this.removeBodyClasses();
      var url = location.path();
      if (url.includes("tournament-detail")) {
        url = "/tournament-detail";
      }
      switch (url) {
        case "/home":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('site-layout--horizontal');
          break;
        case "/upcoming-tournaments":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg--dotted-3x3');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          break;
        case "/tournament-detail":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          break;
        case "/sign":
          document.body.classList.add('preloader-is--active');
          document.getElementById("wrapper").classList.add("login-page");
          break;
        default:
          break;
      }
      document.getElementById("header-menu-toggle").classList.remove("toggled");
      document.getElementById("lit-site-wrapper").classList.remove("site-wrapper--has-menu-overlay");
      setTimeout(() => {
        document.body.classList.remove('preloader-is--active');
      }, 1500);
    })
  }
  
  removeBodyClasses() {
    document.body.classList.remove('preloader-is--active');
    document.body.classList.remove('site-layout--horizontal');
    document.body.classList.remove('bg-fixed');
    document.body.classList.remove('bg--texture-05');
    document.body.classList.remove('bg--dotted-3x3');
    document.body.classList.remove('bg-image');
    document.getElementById("wrapper").classList.remove("site-content--center");
    document.getElementById("wrapper").classList.remove("page");
  }

/***Old App Service  ****/
appState$ = new BehaviorSubject(null);
  
myDetails : MyFullDetail = new MyFullDetail();
myDetails$ =  new BehaviorSubject(this.myDetails);

invitations$ = new BehaviorSubject<MemberRequestViewModel[]>([]);

openSnackBar(message, type,duration?) {
  this._snackBar.open(message, null, {
    duration: duration ? duration : 5000,
    panelClass: ['snackbar-' + type],
  });
}

closeSnackBar() {
  this._snackBar.dismiss();
}

  errorHandler(err: HttpErrorResponse) {
  if(err.status == 400){
    this.openSnackBar(err.error,'error');
  }else{
    this.openSnackBar("You have enounter system error.",'error');
  }
}

formErrorHandler(form: FormGroup){
  let errorList : formErrorState[] = [];
  for(let control_key in form.controls){
    if(!form.controls[control_key].valid){
      for(let err_key in form.controls[control_key].errors){
        errorList.push({
          field:control_key,
          error:err_key
        });
      }
    }
  }

  for (let form_error_key in form.errors) {
    errorList.push({
      field:'formGroup',
      error:form_error_key
    });
  }
  return errorList;
}


}




