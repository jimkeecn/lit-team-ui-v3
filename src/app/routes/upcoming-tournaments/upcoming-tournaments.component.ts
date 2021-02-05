import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicationService } from 'src/app/services/app/application.service';
import { TournamentFilter } from "@app-models/static";
import { TournamentDTO } from "@app-models/tournament";
import { TourneyApiService } from "@app-services/api/tourney-api.service";
import { StaticService } from "@app-services/static/static.service";

@Component({
  selector: 'app-upcoming-tournaments',
  templateUrl: './upcoming-tournaments.component.html',
  styleUrls: ['./upcoming-tournaments.component.scss']
})
export class UpcomingTournamentsComponent implements OnInit {

  $filter = new BehaviorSubject<TournamentFilter>(TournamentFilter.createTournamentFilter());
  tournamentsList: TournamentDTO[] = [];
  tournamentsLoad: boolean = true;
  refresh:boolean = false;
  constructor(public staticService:StaticService, public tourneyApi:TourneyApiService) { }

  ngOnInit(): void {
    this.tourneyApi.getupcomingFeatureTournament().subscribe(x => {
      console.log(x);
    });
    this.getTournaments();
  }

  getTournaments() {
    this.tourneyApi.getTournaments(this.$filter.value).subscribe(x => { 
      this.tournamentsList = x;
      this.tournamentsLoad = false;
    })
  }

  changeTimeline(id:number) {
    let param = { ...this.$filter.value };
    param.timeEmun = id;
    this.$filter.next(param);
    this.getTournaments();
  }

  changeTournamentFormat(id:string) {
    let param = { ...this.$filter.value };
    param.tournamentFormatId = parseInt(id);
    this.$filter.next(param);
    this.getTournaments();
  }

  changeMatchMap(id:string) {
    let param = { ...this.$filter.value };
    param.gameMapId = parseInt(id);
    this.$filter.next(param);
    this.getTournaments();
  }

}
