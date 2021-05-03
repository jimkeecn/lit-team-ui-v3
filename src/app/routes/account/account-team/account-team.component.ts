import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "@app-services/auth/auth.service";
import { ApplicationService } from "@app-services/app/application.service";
import { AccountSettingApiService } from "@app-services/api/account-setting-api.service";
import { ClanMemberViewModel, ClanViewModel, MemberRequestCreateModel, PlayerGameAccount } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { AddUpdateClanModel } from "@app-models/user";
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-account-team',
  templateUrl: './account-team.component.html',
  styleUrls: ['./account-team.component.scss']
})
export class AccountTeamComponent implements OnInit {

  clanIcon: string = "";
  hasClan: boolean = false;
  errors: any[] = [];
  tabState: number = 1;
  members: ClanMemberViewModel[] = [];
  isMembersChanges: boolean = false;
  clanInfo:ClanViewModel;
  detailForm = this.fb.group({
    file:null,
    clanSubTitle: new FormControl("", [Validators.required,Validators.maxLength(50),]),
    clanDescription: new FormControl("", [Validators.required]),
    clanRecruitment: new FormControl("", [Validators.required]),
    clanWebsite: new FormControl(""),
    clanFacebook: new FormControl(""),
    clanInstagram: new FormControl(""),
    clanDiscord: new FormControl(""),
    clanTwitter: new FormControl(""),
    name: new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$')]),
  })

   submitDisable: boolean = false;

  constructor(private route: Router, public auth: AuthService, public app:ApplicationService,
    private fb: FormBuilder, public api:ApiService) { }


  ngOnInit(): void {
    this.getMyTeam();
  }

  getMyTeam() {
    // combineLatest([this.auth.currentUserSubject, this.api.getMyTeam()]).subscribe(res => {
    //   let userId = res[0].user.id;
    //   this.hasClan = true;
    //   this.detailForm.patchValue(res);
    //   this.clanInfo = res[1];
    //   this.members = res[1].members;
    //   this.clanIcon = res[1].iconUrl;
    // })
    this.api.getMyTeam().subscribe(res => { 
      console.log(res);
      if (res) {
        this.hasClan = true;
        this.detailForm.patchValue(res);
        this.clanInfo = res;
        this.members = res.members;
        this.clanIcon = res.iconUrl;
      } else {
        this.hasClan = false;
      }
    })
  }

  memberChange(id,event,type) {
    //console.log(id, event.target.checked);
    this.members.forEach(x => { 
      if (x.id == id) {
        
        switch (type) {
          case "edit":
            x.canEdit = event.target.checked;
            break;
          case "invite":
            x.caninvite = event.target.checked;
            break;
          case "kick":
            x.canKick = event.target.checked;
            break;
        }
      }
    })

    console.log(this.members);
  }

  updateMember(data) {
    this.submitDisable = true;
    this.api.updateMember(data).subscribe(res => { 
      this.app.openSnackBar(`Member has been updated.`, 'success');
      this.getMyTeam();
      this.submitDisable = false;
    }, (err: HttpErrorResponse) => {
      this.submitDisable = false;
      this.app.errorHandler(err);
    })
  }
  inviteMemberName: string;
  inviteMember() {
    this.submitDisable = true;
    let obj: MemberRequestCreateModel = {
      gameId: this.inviteMemberName,
      clanId: this.clanInfo.id
    }
    console.log(obj);
    this.api.inviteMember(obj).subscribe(res => { 
      this.submitDisable = false;
      this.app.openSnackBar(`An invitation has been sent.`, 'success');
      this.getMyTeam();
    }, (err: HttpErrorResponse) => {
      this.submitDisable = false;
      this.app.errorHandler(err);
    })
  }

  submit() {
    this.errors = [];
    if(this.detailForm.valid){
      if (this.hasClan) {
        this.submitDisable = true;
        this.app.openSnackBar('updating your team', 'loading', 120000);
        this.api.updateTeam(this.detailForm.value).subscribe(res => { 
          this.app.openSnackBar(`you have update your team.`, 'success');
          this.submitDisable = false;
          this.getMyTeam();
        }, (err: HttpErrorResponse) => {
          this.submitDisable = false;
          this.app.errorHandler(err);
        })
      } else {
        const param = this.prepareSave();
        this.submitDisable = true;
        this.app.openSnackBar('Creating a new team for you', 'loading', 120000);
        this.api.createNewTeam(param).subscribe(res=>{
          this.app.openSnackBar(`you have created a new team.`, 'success');
          this.submitDisable = false;
          this.getMyTeam();
        }, (err: HttpErrorResponse) => {
          this.submitDisable = false;
          this.app.errorHandler(err);
        })
     }
    } else {
      
      let errorList = this.app.formErrorHandler(this.detailForm);
      errorList.forEach(error => { 
          this.errors.push(AddUpdateClanModel.getErrorMessage(error.field,error.error))
      })
    }
    
  }

  kickMember(member) {
    this.submitDisable = true;
    if (window.confirm(`Are you sure to remove this member "${member.gameId}"`)) {
      this.api.removeMember(member.id).subscribe(res => { 
        this.app.openSnackBar(`You have removed ${member.gameId}`, 'success');
        this.getMyTeam();
        this.submitDisable = false;
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    }
  }

  disband() {
    window.alert("Please contact our admins for disband.")
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.detailForm.get('file').setValue(file ? file : null);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
    input.append('name', this.detailForm.get('name').value);
    input.append('clanSubTitle', this.detailForm.get('clanSubTitle').value);
    input.append('clanDescription', this.detailForm.get('clanDescription').value);
    input.append('clanRecruitment', this.detailForm.get('clanRecruitment').value);
    input.append('clanWebsite', this.detailForm.get('clanWebsite').value);
    input.append('clanFacebook', this.detailForm.get('clanFacebook').value);
    input.append('clanInstagram', this.detailForm.get('clanInstagram').value);
    input.append('clanDiscord', this.detailForm.get('clanDiscord').value);
    input.append('clanTwitter', this.detailForm.get('clanTwitter').value);
    input.append('file', this.detailForm.get('file').value);
    return input;
  }



}
