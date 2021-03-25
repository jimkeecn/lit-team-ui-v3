import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event-ladder',
  templateUrl: './easter-event-ladder.component.html',
  styleUrls: ['./easter-event-ladder.component.scss']
})
export class EasterEventLadderComponent implements OnInit {

  @Output() return = new EventEmitter();
  constructor(public state:EasterEventStateService) { }

  ngOnInit(): void {
  }


  returnFn() {
    this.return.emit(true);
  }

}
