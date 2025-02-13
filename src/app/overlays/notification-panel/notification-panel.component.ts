import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app-services/api/api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { NotificationStateService } from "@app-services/state/notification-state.service"
@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent implements OnInit {

  constructor(public app:ApplicationService, public api:ApiService,public nocService:NotificationStateService) { }

  ngOnInit(): void {
  }



}
