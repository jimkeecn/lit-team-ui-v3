import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent implements OnInit {

  constructor(public app:ApplicationService) { }

  ngOnInit(): void {
  }

}
