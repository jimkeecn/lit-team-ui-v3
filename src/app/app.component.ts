import { Component } from '@angular/core';
import { notificationObject, notificationType } from '@app-models/appState';
import { MemberRequestViewModel } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { AuthService } from '@app-services/auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { ApplicationService } from './services/app/application.service';
import { BehaviorSubject, combineLatest, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Lit-Team-App';
  constructor(public app: ApplicationService, public api: ApiService, public auth: AuthService, public tApi:TourneyApiService) {
    if (this.auth.isLogined()) {
      this.auth.getMyDetail().subscribe(x => { 

      })
      this.getMyClan();
      this.app.getNotification();
    }
    
  
  }

  

  getMyClan() {
    this.api.getMyTeam().subscribe(res => { 
      console.log(res);
      if (res) {
        this.app.clan$.next(res);
      }
      
    })
  }
}
