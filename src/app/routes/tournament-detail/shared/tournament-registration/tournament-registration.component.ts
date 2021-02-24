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
import { LeagueOfLegendsPosition } from '@app-models/static';
@Component({
  selector: 'tournament-registration',
  templateUrl: './tournament-registration.component.html',
  styleUrls: ['./tournament-registration.component.scss']
})
export class TournamentRegistrationComponent implements OnInit {
  errors: any[] = [];
  step: number = 1;
  submitDisable: boolean = false;
  isLeader: boolean = true;
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
  
  members: any[] = [];
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
      for (let x = 0; x < res.length; x++){
        
        res[x].members.forEach(y => { 
          if (y.id == this.auth.currentUserSubject.value.user?.id) {
            this.step = 2;
            this.detailForm.patchValue(res[x]);
            this.members = res[x].members;
          }

          
        })


      }

      let foundLeader = res.find(x => x.leaderId == this.auth.currentUserSubject.value.user.id);
      if (!foundLeader) {
        this.isLeader = false;
      } else {
        this.isLeader = true;
      }
    })
  }

  getPositonText(number) {
    switch (number) {
      case LeagueOfLegendsPosition.Fill:
        return "Fill";
      case LeagueOfLegendsPosition.Top:
        return "Top Laner";
      case LeagueOfLegendsPosition.Jungler:
        return "Jungler";
      case LeagueOfLegendsPosition.Mid:
        return "Mid Laner";
      case LeagueOfLegendsPosition.ADC:
        return "ADC";
      case LeagueOfLegendsPosition.Support:
        return "Support";
      default:
        return "Full";
    }
  }
  discard() {
    document.querySelector(".tournament-container").classList.remove("registration-overlay-active");
  }

  disband() {
    if (window.confirm("Are you sure to unregister this tournament?")) {
      this.submitDisable = true;
      this.api.disbandTournamentById(this.state.detail$.value.tournamentId)
        .subscribe(res => { 
          this.app.openSnackBar(`You have unregistered this tournament.`, 'success');
          this.submitDisable = false;
          this.step = 1;
      }, (err: HttpErrorResponse) => {
            this.submitDisable = false;
            this.app.errorHandler(err);
          })
    }
  }

  kick(userId:number) {
    if (window.confirm("Are you sure to remove this player from your team?")) { 
      this.submitDisable = true;
      this.api.kickFromTournamentById(this.state.detail$.value.tournamentId,userId)
      .subscribe(res => { 
        this.app.openSnackBar(`A player has been removed from your team.`, 'success');
        this.submitDisable = false;
        this.members.splice(this.members.findIndex(x => x.id == userId), 1);
    }, (err: HttpErrorResponse) => {
          this.submitDisable = false;
          this.app.errorHandler(err);
        })
    }
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

  inviteMemberName: string;
  inviteMember() {
    this.submitDisable = true;
    let obj: MemberRequestCreateModel = {
      gameId: this.inviteMemberName,
      clanId:0
    }
    console.log(obj);
    this.api.inviteToTournamentById(this.state.detail$.value.tournamentId,obj).subscribe(res => { 
      this.submitDisable = false;
      this.app.openSnackBar(`An invitation has been sent.`, 'success');
    }, (err: HttpErrorResponse) => {
      this.submitDisable = false;
      this.app.errorHandler(err);
    })
  }

}
