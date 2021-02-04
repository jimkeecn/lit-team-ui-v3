import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
