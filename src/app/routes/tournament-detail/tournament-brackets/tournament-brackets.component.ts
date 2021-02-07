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

  bracketSelected: number = 0;
  currentBrackets: bracketDTO[] = [];
  bracketFilter$ = new BehaviorSubject<BracketFilter>(1);
  constructor(public state: TournamentDetailStateService, public auth:AuthService) {

    combineLatest([this.bracketFilter$, this.state.brackets$, this.auth.currentUserSubject]).pipe(map(x => { 
      //debugger;
      let filter: BracketFilter = x[0];
      let brackets = Object.assign([],[...x[1]]);
      let myDetail = Object.assign({},x[2]);
      if (brackets.length > 0 && brackets && myDetail && myDetail.user.id) {
        let my_team_id = myDetail.user.team.id;
        if (filter == BracketFilter.me) {
          brackets.forEach(brk => { 
            let allBrackets = [...brk.brackets];
            brk.brackets = [];
            for (let y = 0; y < brk.brackets.length; y++){
              if (allBrackets[y].teamA == my_team_id || allBrackets[y].teamB == my_team_id) {
                brk.brackets.push(brk.brackets[y]);
              }
            }
          })
  
          return brackets;
        } else {
          return brackets;
        }
      }
      return [];
    })).subscribe(res => { 
      if (res && res.length > 0) {
        this.bracketSelected = res[0].bracketKnockoutId;
        this.currentBrackets = [...res[0].brackets];
      }

    })
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
  }

  switchBrackets(brackets:bracketDTO[]) {
    this.currentBrackets = [];
    this.bracketSelected = brackets[0].bracketKnockoutId;
    this.currentBrackets = brackets;
  }

  switchBracketFilter(filter:any) {
    console.log(filter.target.value);
    this.bracketFilter$.next(parseInt(filter.target.value));
  }
}
