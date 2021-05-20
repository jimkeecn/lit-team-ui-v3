import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[scrim-accept-notification]',
  templateUrl: './scrim-accept-notification.component.html',
  styleUrls: ['./scrim-accept-notification.component.scss']
})
export class ScrimAcceptNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: null;
  @Input() notificationId: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
