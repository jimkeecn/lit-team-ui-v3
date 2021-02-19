import { animate, style, transition, trigger } from '@angular/animations';
import { Xmb } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamDetailStateService } from '@app-services/state/team-detail-state.service';
import { interval } from 'rxjs';

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
export class TeamMembersComponent implements OnInit, OnDestroy {
  selectedId: number = 0;
  memberIds: number[] = [];
  interval = interval(5000);
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

  interval$ = this.interval.subscribe(val => {
    let currentId = this.memberIds.findIndex(x => x == this.selectedId);
    let nextId = currentId !== null
      && currentId < this.memberIds.length - 1
      ? currentId + 1 : 0;
    console.log(nextId);
    this.selectedId = this.memberIds[nextId];
  });

  ngOnInit(): void {
    
  }

  getOpGG(gameId: string) {
    return `https://oce.op.gg/summoner/userName=${gameId}`;
  }

  getTwitter(userName: string) {
    return `https://twitter.com/${userName}`
  }

  getTwitch(userName: string) {
    return `https://twitch.tv/${userName}`
  }

  getInstagram(userName: string) {
    return `https://www.instagram.com/${userName}`
  }

  stopInterval() {
    this.interval$.unsubscribe();
  }

  ngOnDestroy() {
    this.interval$.unsubscribe();
  }
}
