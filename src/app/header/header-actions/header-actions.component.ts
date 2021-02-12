import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
})
export class HeaderActionsComponent implements OnInit {

  constructor(public auth:AuthService,public app:ApplicationService) { }

  ngOnInit(): void {
  }

}
