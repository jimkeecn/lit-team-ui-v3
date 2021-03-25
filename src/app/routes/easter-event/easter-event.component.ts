import { Component, OnInit } from '@angular/core';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event',
  templateUrl: './easter-event.component.html',
  styleUrls: ['./easter-event.component.scss']
})
export class EasterEventComponent implements OnInit {

  constructor(public state: EasterEventStateService) {
    this.state.getEvent();
  }

  ngOnInit(): void {
    
  }

  return($event) {
    if($event)
    this.state.isStory = false;
  }

}
