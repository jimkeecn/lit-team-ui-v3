import { Component, OnInit } from '@angular/core';
import { TeamDetailStateService } from '@app-services/state/team-detail-state.service';

@Component({
  selector: 'team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  constructor(public state:TeamDetailStateService) { }

  ngOnInit(): void {
  }

}
