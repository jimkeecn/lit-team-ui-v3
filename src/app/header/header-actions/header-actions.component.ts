import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
})
export class HeaderActionsComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
