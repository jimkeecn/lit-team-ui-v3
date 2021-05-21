import { Component, Input, OnInit } from '@angular/core';
import { ClanViewModel } from '@app-models/user';
import { NotificationStateService } from '@app-services/state/notification-state.service';

@Component({
  selector: '[scrim-join-notification]',
  templateUrl: './scrim-join-notification.component.html',
  styleUrls: ['./scrim-join-notification.component.scss']
})
export class ScrimJoinNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: ClanViewModel;
  @Input() notificationId: number;
  
  
  constructor(public state:NotificationStateService) { }

  ngOnInit(): void {
  }

}
