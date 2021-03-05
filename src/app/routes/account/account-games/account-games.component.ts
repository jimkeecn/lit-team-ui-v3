import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "@app-services/auth/auth.service";
import { ApplicationService } from "@app-services/app/application.service";
import { AccountSettingApiService } from "@app-services/api/account-setting-api.service";
import { PlayerGameAccount } from '@app-models/user';
@Component({
  selector: 'app-account-games',
  templateUrl: './account-games.component.html',
  styleUrls: ['./account-games.component.scss']
})
export class AccountGamesComponent implements OnInit {

  positions: any[] = [
    {
      id:0,name:"Fill",
    },
    {
      id:1,name:"Top Laner",
    },
    {
      id:2,name:"Jungler",
    },
    {
      id:3,name:"Mid Laner",
    },
    {
      id:4,name:"ADC",
    },
    {
      id:5,name:"Support",
    }
  ]

  errors: any[] = [];
  usedAccounts: PlayerGameAccount[] = [];
  hasCurrent: boolean = false;
  isVerified: boolean = false;

  detailForm = this.fb.group({
    gameStaticId: new FormControl(1,[Validators.required]),
    gameUniqueName: new FormControl('', [Validators.required]),
    position: new FormControl(0, [Validators.required]),
    myDescription: new FormControl('', [Validators.required,Validators.maxLength(100)]),
  })

  submitDisable: boolean = false;

  constructor(private route: Router, public auth: AuthService,
    private fb: FormBuilder, private app: ApplicationService,
  public api:AccountSettingApiService) { }


  ngOnInit(): void {
    this.getAccounts();
    
  }


  getAccounts() {
    this.api.getGameAccounts().subscribe(res => { 
      this.hasCurrent = false;
      console.log(res);//current,used
      if (res.current) {
        this.detailForm.patchValue(res.current);
        this.hasCurrent = true;
      }

      if (res.used && res.used.length > 0) {
        this.usedAccounts = res.used;
      }
    })
  }
  submit() {
    this.errors = [];
    console.log(this.detailForm.value);
    if (this.detailForm.valid) {
     
      this.submitDisable = true;
      this.app.openSnackBar('Saving information', 'loading', 120000);
      this.api.addUpdateGameAccount(this.detailForm.value).subscribe(x => {
        this.submitDisable = false;
        this.app.openSnackBar('You have submit your game account.', 'success');
        this.getAccounts();
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    } else {
      let errorList = this.app.formErrorHandler(this.detailForm);
      errorList.forEach(error => { 
          this.errors.push(PlayerGameAccount.getErrorMessage(error.field,error.error))
      })
    }
    
  }

  delink() {
    let confirm = window.confirm("Are you sure you want to delink your account?")
    if (confirm) {
      this.api.delinkCurrentGameAccount().subscribe(x => {
        this.submitDisable = false;
        this.app.openSnackBar('You have delink your game account.', 'success');
        this.getAccounts();
        this.detailForm.patchValue({
          gameUniqueName: "",
          position: 0,
          myDescription:""
        })
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    }
   
  }

  refreshSummonerName() {
    this.api.refreshSummonerName().subscribe(x => {
      this.submitDisable = false;
      this.app.openSnackBar('You have refresh your summoner name', 'success');
      this.getAccounts();
    }, (err: HttpErrorResponse) => {
      this.submitDisable = false;
      this.app.errorHandler(err);
    })
  }

  checkHistory() {
    alert("Currently, you can only access your history by sending a request to our discord admins.");
  }
}
