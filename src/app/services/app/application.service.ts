import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Location } from "@angular/common";
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { ClanViewModel, MemberRequestViewModel, MyFullDetail } from '../../models/user';
import { formErrorState, notificationObject, notificationType, RouterActiveEnum } from '../../models/appState';
import { MatDialog } from '@angular/material/dialog';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '@app-services/api/api.service';
import { TourneyApiService } from '@app-services/api/tourney-api.service';




@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  routeTransferCompleted = true;
  routeState: RouterActiveEnum;
  constructor(private route: Router, location: Location, private _snackBar: MatSnackBar,
    private dialog: MatDialog, private tourneyDetailState: TournamentDetailStateService,
  private api:ApiService,private tApi:TourneyApiService) {
    this.route.events.subscribe(val => {
      this.routeTransferCompleted = false;
      this.removeBodyClasses();
      var url = location.path();
      if (url.includes("tournament-detail")) {
        url = "/tournament-detail";
        if (this.route.url.includes("overview")) {
          this.tourneyDetailState.links = 1;
        } else if (this.route.url.includes("rules")) {
          this.tourneyDetailState.links = 2;
        } else if (this.route.url.includes("agents")) {
          this.tourneyDetailState.links = 3;
        }
        else if (this.route.url.includes("teams")) {
          this.tourneyDetailState.links = 4;
        } else if (this.route.url.includes("bracket")) {
          this.tourneyDetailState.links = 5;
        } 
      }

      if (url.includes("team-detail")) {
        url = "/team-detail";
      }

      if (url.includes("account")) {
        url = "/account";
      }

      if (url.includes("reset-password")) {
        url = "/reset-password";
      }

      if (url.includes("tournament-invite")) {
        url = "/tournament-invite";
      }

      if (url.includes("scrims")) {
        url = "/scrims";
      }

      switch (url) {
        case "/home":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('scroll-is--active');
          document.body.classList.add('site-layout--horizontal');
          this.routeState = RouterActiveEnum.home;
          break;
        case "/upcoming-tournaments":
          //document.body.classList.add('preloader-is--active');
          document.body.classList.add('scroll-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg--dotted-3x3');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          this.routeState = RouterActiveEnum.tournaments;
          break;
          case "/tournament-invite":
          //document.body.classList.add('preloader-is--active');
          document.body.classList.add('scroll-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg--dotted-3x3');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          this.routeState = RouterActiveEnum.tournaments;
          break;
          case "/tournament-detail":
            //document.body.classList.add('preloader-is--active');
            document.body.classList.add('scroll-is--active');
            document.body.classList.add('bg-fixed');
            document.body.classList.add('bg--texture-05');
            document.body.classList.add('bg-image');
            document.getElementById("wrapper").classList.add("site-content--center");
            document.getElementById("wrapper").classList.add("page");
            this.routeState = RouterActiveEnum.tournaments;
            break;
        case "/teams":
          //document.body.classList.add('preloader-is--active');
          document.body.classList.add('scroll-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg--dotted-3x3');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          this.routeState = RouterActiveEnum.teams;
          break;
          case "/team-detail":
            //document.body.classList.add('preloader-is--active');
            document.body.classList.add('scroll-is--active');
            document.body.classList.add('full-screen-preview');
            document.body.classList.add('bg--texture-05');
            document.body.classList.add('bg-image');
            document.getElementById("wrapper").classList.add("team-info-page");
            this.routeState = RouterActiveEnum.teams;
          break;
         case "/easter-event":
            //document.body.classList.add('preloader-is--active');
            document.body.classList.add('scroll-is--active');
          document.body.classList.add('full-screen-preview');
          document.body.classList.add('bg-image');
            this.routeState = RouterActiveEnum.easter;
          break;
        case "/scrims":
            //document.body.classList.add('preloader-is--active');
            document.body.classList.add('scroll-is--active');
            document.body.classList.add('bg-fixed');
            document.body.classList.add('bg--texture-01');
            document.body.classList.add('bg--dotted-3x3');
            document.body.classList.add('bg-image');
            this.routeState = RouterActiveEnum.scrims;
          break;
        case "/account":
          //document.body.classList.add('preloader-is--active');
          document.body.classList.add('scroll-is--active');
          //document.body.classList.add('site-layout--default');
          //document.getElementById("wrapper").classList.add("account-page");
          this.routeState = 0;
          break;
        case "/sign":
          //document.body.classList.add('preloader-is--active');
          document.body.classList.add('scroll-is--active');
          document.getElementById("wrapper").classList.add("login-page");
          this.routeState = 0;
          break;
        case "/reset-password":
            //document.body.classList.add('preloader-is--active');
            document.body.classList.add('scroll-is--active');
            document.getElementById("wrapper").classList.add("login-page");
            this.routeState = 0;
            break;
        default:
          break;
      }
      
      document.getElementById("header-menu-toggle").classList.remove("toggled");
      document.getElementById("lit-site-wrapper").classList.remove("site-wrapper--has-menu-overlay");
      document.querySelectorAll(".header-werido").forEach(x => { 
        x.classList.remove("hide");
        x.classList.remove("toggled");
      })
      document.querySelector(".header-account").classList.add("hide");
      
      setTimeout(() => {
        document.body.classList.remove('preloader-is--active');
        this.routeTransferCompleted = true;
      }, 1300);
    })
  }
  
  removeBodyClasses() {
    document.body.classList.remove('scroll-is--active');
    document.body.classList.remove('preloader-is--active');
    document.body.classList.remove('site-layout--horizontal');
    document.body.classList.remove('site-layout--default');
    document.body.classList.remove('bg-fixed');
    document.body.classList.remove('bg--texture-05');
    document.body.classList.remove('bg--dotted-3x3');
    document.body.classList.remove('bg-image');
    document.getElementById("wrapper").classList.remove("site-content--center");
    document.getElementById("wrapper").classList.remove("page");
    document.getElementById("wrapper").classList.remove("team-info-page");
    document.getElementById("wrapper").classList.remove("account-page");
    document.getElementById("wrapper").classList.remove("login-page");
    document.getElementById("lit-site-wrapper").classList.remove("site-wrapper--has-fire-overlay");
  }

/***Old App Service  ****/
appState$ = new BehaviorSubject(null);
  
myDetails : MyFullDetail = new MyFullDetail();
myDetails$ =  new BehaviorSubject(this.myDetails);

invitations$ = new BehaviorSubject<MemberRequestViewModel[]>([]);
clan$ = new BehaviorSubject<ClanViewModel>(null);


  
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
    if (err.status == 400) {
      this.openSnackBar(err.error, 'error');
    } else if (err.status == 401) { 
      this.openSnackBar("Please login to your account","error");
    }
    else {
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


  /*** Notification Deprecated ***/

  // notifications$ = new BehaviorSubject<notificationObject[]>([]);



  // removeFromNotifications(index) {
  //   let invs = [...this.notifications$.value];
  //   invs.splice(index, 1);
  //   this.notifications$.next(invs);
  // }

  // getNotification() {
  //   combineLatest([this.api.getAllInvitations(), this.tApi.getTournamentInvitation()]).pipe(map(data => { 
  //     const clanInvs = JSON.parse(JSON.stringify(data[0]));
  //     const tourInvs = JSON.parse(JSON.stringify(data[1]));

  //     let array:notificationObject[] = [];

  //     for (let x = 0; x < clanInvs.length; x++){
  //     let obj:notificationObject = {
  //       data: clanInvs[x],
  //       time: clanInvs[x].date,
  //       type: notificationType.ClanInvitation
  //     }
  //     array.push(obj);
  //     }
      
  //     for (let x = 0; x < tourInvs.length; x++){
  //       let obj:notificationObject = {
  //         data: tourInvs[x],
  //         time: tourInvs[x].date,
  //         type: notificationType.TournamentInvitation
  //       }
  //       array.push(obj);
  //     }

  //     return array;
  //   })).subscribe(res => { 
  //     console.log(`invitations:${res.length}`);
  //     this.notifications$.next(res);
  //     console.log(res);
  //   })
  // }
}




