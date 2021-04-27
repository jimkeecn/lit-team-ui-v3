import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MemberRequestViewModel } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { NotificationStateService } from '@app-services/state/notification-state.service';

@Component({
  selector: '[clan-invite-notification]',
  templateUrl: './clan-invite-notification.component.html',
  styleUrls: ['./clan-invite-notification.component.scss']
})
export class ClanInviteNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: MemberRequestViewModel;
  @Input() notificationId: number;
  constructor(public app:ApplicationService, public api:ApiService, public nocState : NotificationStateService) { }

  ngOnInit(): void {
  }

  accept(id) {
    console.log(id);
    this.api.acceptApplication(id).subscribe(res => { 
      this.app.openSnackBar(`Start journey with your clan mates!`, 'success');
      this.nocState.removeFromNotifications(this.index);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

  reject(id) {
    console.log(id);
    this.api.denialApplication(id).subscribe(res => { 
      this.app.openSnackBar(`You rejected an invitation`, 'success');
      this.nocState.removeFromNotifications(this.index);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

}
