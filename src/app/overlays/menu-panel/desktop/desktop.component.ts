import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor(public auth:AuthService, public app:ApplicationService) { }

  ngOnInit(): void {
  }

}
