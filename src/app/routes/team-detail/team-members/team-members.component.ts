import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TeamDetailStateService } from '@app-services/state/team-detail-state.service';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
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
export class TeamMembersComponent implements OnInit {
  selectedId: number = 0;
  constructor(public state: TeamDetailStateService) { 
    this.state.overview$.subscribe(x => { 
      this.selectedId = x.members[0].id;
    })
  }

  ngOnInit(): void {
  }

}
