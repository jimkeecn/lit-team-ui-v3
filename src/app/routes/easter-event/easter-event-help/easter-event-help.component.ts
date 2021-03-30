import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event-help',
  templateUrl: './easter-event-help.component.html',
  styleUrls: ['./easter-event-help.component.scss']
})
export class EasterEventHelpComponent implements OnInit {

  @Output() return = new EventEmitter();
  constructor(public state:EasterEventStateService) { }

  ngOnInit(): void {
  }


  returnFn() {
    this.return.emit(true);
  }

}
