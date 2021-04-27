import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CheckInNotificationDTO } from '@app-models/notification';
import { MemberRequestViewModel } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { NotificationStateService } from '@app-services/state/notification-state.service';

@Component({
  selector: '[bracket-checkin-notification]',
  templateUrl: './bracket-checkin-notification.component.html',
  styleUrls: ['./bracket-checkin-notification.component.scss']
})
export class BracketCheckinNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: CheckInNotificationDTO;
  @Input() notificationId: number;

  constructor(public app:ApplicationService, public api:ApiService, public nocState : NotificationStateService) { }

  ngOnInit(): void {
  }

}
