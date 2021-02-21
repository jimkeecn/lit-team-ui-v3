import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-services/auth/auth.service';
import { AccountStateService } from "@app-services/state/account-state.service";

@Component({
  selector: 'account-actions',
  templateUrl: './account-actions.component.html',
  styleUrls: ['./account-actions.component.scss']
})
  
export class AccountActionsComponent implements OnInit {

  constructor(public state:AccountStateService,public auth:AuthService) { }

  ngOnInit(): void {
  }

}
