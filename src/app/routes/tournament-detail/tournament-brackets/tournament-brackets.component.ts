import { AfterViewInit, Component, OnInit } from '@angular/core';
import { bracketDTO, BracketGroupDTO } from '@app-models/tournament';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
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
  constructor(public state: TournamentDetailStateService) {
    this.state.brackets$.subscribe(res => { 
      if (res && res.length > 0) {
        this.bracketSelected = res[0].bracketKnockoutId;
        this.currentBrackets = res[0].brackets;
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
}
