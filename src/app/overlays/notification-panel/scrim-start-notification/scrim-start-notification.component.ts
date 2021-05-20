import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[scrim-start-notification]',
  templateUrl: './scrim-start-notification.component.html',
  styleUrls: ['./scrim-start-notification.component.scss']
})
export class ScrimStartNotificationComponent implements OnInit {

  @Input() index: number;
  @Input() data: null;
  @Input() notificationId: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
