import { Component } from '@angular/core';
import { MemberRequestViewModel } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { AuthService } from '@app-services/auth/auth.service';
import { ApplicationService } from './services/app/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'test-app';
  constructor(public app: ApplicationService, public api: ApiService, public auth: AuthService) {
    if (this.auth.isLogined()) {
      this.auth.getMyDetail().subscribe(x => { 
        
      })
    }
    
  }

  getAllInvitations(){
    this.api.getAllInvitations().subscribe(res=>{
      console.log(`invitations:${res.length}`);
      this.app.invitations$.next(res);
    })
  }
}
