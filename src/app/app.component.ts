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
      combineLatest([api.getAllInvitations(), tApi.getTournamentInvitation()]).pipe(map(data => { 
        const clanInvs = JSON.parse(JSON.stringify(data[0]));
        const tourInvs = JSON.parse(JSON.stringify(data[1]));

        let array:notificationObject[] = [];

        for (let x = 0; x < clanInvs.length; x++){
        let obj:notificationObject = {
          data: clanInvs[x],
          time: clanInvs[x].date,
          type: notificationType.ClanInvitation
        }
        array.push(obj);
        }
        
        for (let x = 0; x < tourInvs.length; x++){
          let obj:notificationObject = {
            data: tourInvs[x],
            time: tourInvs[x].date,
            type: notificationType.TournamentInvitation
          }
          array.push(obj);
        }

        return array;
      })).subscribe(res => { 
        console.log(`invitations:${res.length}`);
        app.notifications$.next(res);
        console.log(res);
      })
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
