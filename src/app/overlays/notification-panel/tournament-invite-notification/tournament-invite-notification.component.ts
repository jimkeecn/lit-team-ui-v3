import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TournamentInvitationNotification } from '@app-models/tournament';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { NotificationStateService } from '@app-services/state/notification-state.service';

@Component({
  selector: '[tournament-invite-notification]',
  templateUrl: './tournament-invite-notification.component.html',
  styleUrls: ['./tournament-invite-notification.component.scss']
})
export class TournamentInviteNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: TournamentInvitationNotification;
  @Input() notificationId: number;
  constructor(public app:ApplicationService, public api:TourneyApiService, public nocState : NotificationStateService) { }

  ngOnInit(): void {
  }

  accept(id) {
    console.log(id);
    this.api.acceptTournamentInvitation(id,this.notificationId).subscribe(res => { 
      this.app.openSnackBar(`Start tournament with your team mates!`, 'success');
      this.nocState.removeFromNotifications(this.index);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

  reject(id) {
    console.log(id);
    this.api.rejectTournamentInvitation(id,this.notificationId).subscribe(res => { 
      this.app.openSnackBar(`You rejected an invitation`, 'success');
      this.nocState.removeFromNotifications(this.index);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

}
