import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event-storyboard',
  templateUrl: './easter-event-storyboard.component.html',
  styleUrls: ['./easter-event-storyboard.component.scss']
})
export class EasterEventStoryboardComponent implements OnInit {

  @Output() return = new EventEmitter();
  constructor(public state:EasterEventStateService) { }

  ngOnInit(): void {
  }


  returnFn() {
    this.return.emit(true);
  }
}
