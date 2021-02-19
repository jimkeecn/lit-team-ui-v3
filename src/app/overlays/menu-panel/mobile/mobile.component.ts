import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor(public auth:AuthService, public app:ApplicationService) { }

  ngOnInit(): void {
  }

}
