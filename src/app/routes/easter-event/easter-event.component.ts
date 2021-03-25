import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event',
  templateUrl: './easter-event.component.html',
  styleUrls: ['./easter-event.component.scss'],
  animations: [
    trigger(
      'slideLeftAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  opacity: 0 }),
            animate('0.3s ease-out', 
                    style({  opacity: 1 }))
          ]
        ),
        
      ]
    )
  ]
})
export class EasterEventComponent implements OnInit {

  constructor(public state: EasterEventStateService) {
    this.state.getEvent();
    this.state.isStory = false;
    this.state.isTask = false;
  }

  ngOnInit(): void {
    
  }

  returnFromStage($event) {
    if($event)
    this.state.isStory = false;
  }

  returnFromTask($event) {
    if($event)
    this.state.isTask = false;
  }



}
