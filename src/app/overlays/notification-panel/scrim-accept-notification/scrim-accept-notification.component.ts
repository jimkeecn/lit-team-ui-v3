import { Component, Input, OnInit } from '@angular/core';
import { NotificationStateService } from '@app-services/state/notification-state.service';

@Component({
  selector: '[scrim-accept-notification]',
  templateUrl: './scrim-accept-notification.component.html',
  styleUrls: ['./scrim-accept-notification.component.scss']
})
export class ScrimAcceptNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: null;
  @Input() notificationId: number;
  
  constructor(public state:NotificationStateService) { }

  ngOnInit(): void {
  }

}
