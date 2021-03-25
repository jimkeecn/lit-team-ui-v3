import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event-tasks',
  templateUrl: './easter-event-tasks.component.html',
  styleUrls: ['./easter-event-tasks.component.scss']
})
export class EasterEventTasksComponent implements OnInit {

  @Output() return = new EventEmitter();
  constructor(public state:EasterEventStateService) { }

  ngOnInit(): void {
  }


  returnFn() {
    this.return.emit(true);
  }

}
