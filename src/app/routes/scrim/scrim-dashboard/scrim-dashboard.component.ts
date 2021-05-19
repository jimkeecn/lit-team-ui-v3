import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-scrim-dashboard',
  templateUrl: './scrim-dashboard.component.html',
  styleUrls: ['./scrim-dashboard.component.scss']
})
export class ScrimDashboardComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
