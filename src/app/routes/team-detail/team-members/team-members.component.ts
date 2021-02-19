import { animate, style, transition, trigger } from '@angular/animations';
import { Xmb } from '@angular/compiler';
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
  memberIds: number[] = [];
  constructor(public state: TeamDetailStateService) { 
    this.state.overview$.subscribe(x => { 
      this.selectedId = x.members[0].id;
      if (x.members.length > 0) {
        x.members.forEach(m => { 
          this.memberIds.push(m.id);
        })
      }
      
    })
  }

  ngOnInit(): void {
    if (this.memberIds.length > 0) {
      setInterval(() => { 
        let nextId = this.memberIds.findIndex(x => x == this.selectedId) !== null
          && this.memberIds.findIndex(x => x == this.selectedId) < this.memberIds.length - 1
          ? this.memberIds.findIndex(x => x == this.selectedId) + 1 : 0;
        console.log(nextId);
        this.selectedId = this.memberIds[nextId];


        /**** easy logic here  ***** */
        
        // let currentIndex = this.memberIds.findIndex(x => x == this.selectedId);
        // if (currentIndex < this.memberIds.length - 1) {
        //   this.selectedId = this.memberIds[currentIndex + 1];
        //   console.log(this.memberIds[currentIndex + 1])
        // } else {
        //   this.selectedId = this.memberIds[0];
        //   console.log(this.memberIds[0]);
        // }

      },5000)
    }
    
  }

}
