import { Component, Input, OnInit } from '@angular/core';
import { NotificationStateService } from '@app-services/state/notification-state.service';

@Component({
  selector: '[scrim-start-notification]',
  templateUrl: './scrim-start-notification.component.html',
  styleUrls: ['./scrim-start-notification.component.scss']
})
export class ScrimStartNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: null;
  @Input() notificationId: number;
  
  constructor(public state:NotificationStateService) { }

  ngOnInit(): void {
  }

}
