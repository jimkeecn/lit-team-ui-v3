import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationType } from '@app-models/static';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';
import { StaticStateService } from '@app-services/state/static-state.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-account-notifications',
  templateUrl: './account-notifications.component.html',
  styleUrls: ['./account-notifications.component.scss']
})
export class AccountNotificationsComponent implements OnInit {

  notifications: NotificationType[] = [];
  submitDisable: boolean = false;
  constructor(public state:StaticStateService, public auth:AuthService, public app:ApplicationService) { }

  ngOnInit(): void {
    combineLatest([this.state.notificationTypes$, this.auth.currentUserSubject]).subscribe(res => {
    
      if (res[0].length > 0 && res[1]?.user) {
        var notifications = res[0];
        var userSetting = res[1]?.user.notification;
        
        notifications.forEach(noc => {
          
          let setting = userSetting.find(x => x.notificationId == noc.notificationId);
          if (setting !== null) {
            noc.email = setting.email;
            noc.inbox = setting.inbox;
          }
          this.notifications.push(noc);
        })
      }
    })
  }

  notificationChange(id,event,type) {
    //console.log(id, event.target.checked);
    this.notifications.forEach(x => { 
      if (x.notificationId == id) {
        switch (type) {
          case "email":
            x.email = event.target.checked;
            break;
        }
      }
    })
  }

  change() {
    this.auth.updateAccountNotification(this.notifications).subscribe(res => {
      this.submitDisable = false;
      this.app.openSnackBar('You have changed your notification setting', 'success');
    }, (err: HttpErrorResponse) => {
      this.submitDisable = false;
      this.app.errorHandler(err);
    })
  }
}
