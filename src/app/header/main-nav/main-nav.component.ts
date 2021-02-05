import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent implements OnInit {

  constructor(public auth: AuthService,public app:ApplicationService) {
    
   }

  ngOnInit(): void {
  }
}
