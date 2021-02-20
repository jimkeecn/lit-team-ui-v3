import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "@app-services/auth/auth.service";
import { ApplicationService } from "@app-services/app/application.service";
import { LoginModel, MyFullDetailExtend } from '@app-models/user';

@Component({
  selector: 'twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {

  errors: any[] = [];
  detailForm = this.fb.group({
    twitchId: new FormControl('',[Validators.maxLength(30)]),
  })
  
  submitDisable: boolean = false;

   constructor(private route:Router, public auth:AuthService, private fb:FormBuilder, private app:ApplicationService) { }

  ngOnInit(): void {
    this.auth.currentUserSubject.subscribe(x => { 
      this.detailForm.patchValue({
        twitchId: x.user ? x.user.twitchId : null,
      });
    })
  }


  save() {
    this.errors = [];
    if(this.detailForm.valid){
      const detailForm : MyFullDetailExtend = {
        twitchId: this.detailForm.get('twitchId').value,
      };
      this.submitDisable = true;
      this.app.openSnackBar('Saving information', 'loading', 120000);
      this.auth.updateAccountTwitch(detailForm).subscribe(x => {
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
