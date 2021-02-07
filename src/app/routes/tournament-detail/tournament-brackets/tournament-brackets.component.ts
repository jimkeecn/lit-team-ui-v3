import { AfterViewInit, Component, OnInit } from '@angular/core';
import { bracketDTO, BracketGroupDTO } from '@app-models/tournament';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BehaviorSubject, combineLatest, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

enum BracketFilter{
  all = 1,
  me = 2
}

class BracketOptions{
  id: number;
  name: string;
}

@Component({
  selector: 'app-tournament-brackets',
  templateUrl: './tournament-brackets.component.html',
  styleUrls: ['./tournament-brackets.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ left: 100, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ left:0, opacity: 1 }))
          ]
        ),
        
      ]
    )
  ]
})
export class TournamentBracketsComponent implements OnInit , AfterViewInit{

  BracketOptions: BracketOptions[] = [
    {
      id: 1,
      name:"All Teams"
    },
    {
      id: 2,
      name:"My Team Only"
    }
  ]

  bracketSelected: number = 0;
  currentBrackets: bracketDTO[] = [];
  bracketFilter$ = new BehaviorSubject<BracketFilter>(1);
  bracketSelected$ = new BehaviorSubject<number>(0);
  constructor(public state: TournamentDetailStateService, public auth:AuthService) {

    combineLatest([this.bracketFilter$, this.state.brackets$, this.auth.currentUserSubject,this.bracketSelected$]).pipe(map(x => { 
      let filter: BracketFilter = x[0];
      let brackets = JSON.parse(JSON.stringify(x[1]));
      let myDetail = JSON.parse(JSON.stringify(x[2]));
      
      if (brackets.length > 0 && brackets && myDetail && myDetail.user.id) {
        let bracketSelected = x[3] !== 0 ? x[3] : x[1][0].bracketKnockoutId;
        let my_team_id = myDetail.user.team.id;
        let bracket = brackets.find(x => x.bracketKnockoutId == bracketSelected);
        if (filter == BracketFilter.me) {
          let allBrackets = bracket.brackets;
          bracket.brackets = [];
          for (let y = 0; y < allBrackets.length; y++){
            if (allBrackets[y].teamA == my_team_id || allBrackets[y].teamB == my_team_id) {
              bracket.brackets.push(allBrackets[y]);
            }
          }
          return [bracket.brackets,bracketSelected];
        } else {
          let bracket = brackets.find(x => x.bracketKnockoutId == bracketSelected);
          return [bracket.brackets,bracketSelected];
        }
      }
      return [];
    })).subscribe(res => { 
      if (res && res.length > 0) {
        this.bracketSelected = res[1];
        this.currentBrackets = [...res[0]];
      }

    })
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
  }

  switchBrackets(brackets:bracketDTO[]) {
    this.currentBrackets = [];
    this.bracketSelected$.next(brackets[0].bracketKnockoutId);
  }

  switchBracketTeamFilter(filter:any) {
    console.log(filter.target.value);
    this.bracketFilter$.next(parseInt(filter.target.value));
  }
}
