import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamViewModel } from '@app-models/user';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.scss']
})
export class TeamStandingsComponent implements OnInit {

  teamSearch = new FormControl("");
  allTeams: TeamViewModel[] = [];
  _teams: TeamViewModel[] = [];
  constructor(private route: ActivatedRoute) {
    this._teams = this.route.snapshot.data.detail;
    this.allTeams = this.route.snapshot.data.detail;
   }

  ngOnInit(): void {
    this.teamSearch.valueChanges.pipe(distinctUntilChanged(),debounceTime(500),map(x => { 
      debugger;
      let teams = [];
      for (let t = 0; t < this.allTeams.length; t++){
        if (this.allTeams[t].name.toLowerCase().includes(x.toLowerCase())) {
          teams.push(this.allTeams[t])
        }
      }
      return teams;
    })).subscribe(res => { 
      this._teams = res;
    })
  }

}
