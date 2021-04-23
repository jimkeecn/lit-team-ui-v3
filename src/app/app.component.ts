import { Component } from '@angular/core';
import { notificationObject, notificationType } from '@app-models/appState';
import { MemberRequestViewModel } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { AuthService } from '@app-services/auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { ApplicationService } from './services/app/application.service';
import { BehaviorSubject, combineLatest, zip } from 'rxjs';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';
import { StaticService } from '@app-services/static/static.service';
import { StaticStateService } from '@app-services/state/static-state.service';
import { SignalRService} from "@app-services/live/signal-r.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Lit-Team-App';
  constructor(public app: ApplicationService,
    public api: ApiService, public auth: AuthService,
    public tApi: TourneyApiService, private easterState: EasterEventStateService,
    public staticService: StaticService, public stateState: StaticStateService,
    public live: SignalRService) {
    //live.startConnection();
    //live.buildConnection();
    if (this.auth.isLogined()) {
      console.log(auth.currentUserSubject.value);
      this.auth.getMyDetail().subscribe(x => { 
        
      })
      this.getMyClan();
      this.app.getNotification();
      
    }
    this.easterState.getEvent();
    this.staticService.getNotificationType().subscribe(res => {
      this.stateState.notificationTypes$.next(res);
    })
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
