import { Component, OnInit } from '@angular/core';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "@app-services/auth/auth.service";
import { ApplicationService } from "@app-services/app/application.service";
import { AccountSettingApiService } from "@app-services/api/account-setting-api.service";
import { ClanMemberViewModel, ClanViewModel, MemberRequestCreateModel, PlayerGameAccount } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { AddUpdateClanModel } from "@app-models/user";
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { TournamentRegistration } from '@app-models/tournament';
@Component({
  selector: 'tournament-registration',
  templateUrl: './tournament-registration.component.html',
  styleUrls: ['./tournament-registration.component.scss']
})
export class TournamentRegistrationComponent implements OnInit {
  errors: any[] = [];
  step: number = 1;
  submitDisable: boolean = false;
  clanId: number = 0;
  options: any[] = [
    {
      value: true,
      name:"Yes"
    },
    {
      value: false,
      name:"No"
    }
  ]
  detailForm = this.fb.group({
    name: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$')]),
    isClan: new FormControl(false),
    clanId: new FormControl(null)
  })
  
  constructor(public state:TournamentDetailStateService, public auth: AuthService, public app:ApplicationService,
    private fb: FormBuilder, public api:TourneyApiService) { }

  ngOnInit(): void {
    this.app.clan$.subscribe(res => { 
      if (res) {
        this.clanId = res.id
      }
      
    })
    this.detailForm.get("isClan").valueChanges.subscribe(res => { 
      if (res == true) {
        this.detailForm.patchValue({clanId:this.clanId})
      } else {
        this.detailForm.patchValue({clanId:null})
      }
      console.log(this.detailForm.value);
    })

    this.state.teams$.subscribe(res => { 
      if (res && res.length > 0) {
        let myTeam = res.find(x => x.leaderId == this.auth.currentUserSubject.value.user.id);
        if (myTeam != null) {
          this.step = 2;
          this.detailForm.patchValue(myTeam);
        } else {
          this.step = 1;
        }
      }
     
    })
  }

  discard() {
    document.querySelector(".tournament-container").classList.remove("registration-overlay-active");
  }

  register() {
    switch (this.step) {
      case 1:
        if (this.detailForm.valid) {
          this.submitDisable = true;
          this.api.registerTournamentById(this.state.detail$.value.tournamentId, this.detailForm.value).subscribe(res => {
            this.app.openSnackBar(`Created a new team.`, 'success');
            this.submitDisable = false;
            this.step = 2;
          }, (err: HttpErrorResponse) => {
            this.submitDisable = false;
            this.app.errorHandler(err);
          })
        } else {
          let errorList = this.app.formErrorHandler(this.detailForm);
          errorList.forEach(error => {
            this.errors.push(TournamentRegistration.getErrorMessage(error.field, error.error))
          })
        }
        break;
      case 2:
        break;
      default:
        break;
    }
  
    
  }
}
