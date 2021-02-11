import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamViewModel } from '@app-models/user';

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.scss']
})
export class TeamStandingsComponent implements OnInit {

  _teams: TeamViewModel[] = [];
  constructor(private route: ActivatedRoute) {
    this._teams = this.route.snapshot.data.detail;
   }

  ngOnInit(): void {
  }

}
