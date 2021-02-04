import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
})
export class MenuPanelComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
