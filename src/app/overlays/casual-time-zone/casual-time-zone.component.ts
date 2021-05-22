import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'casual-time-zone',
  templateUrl: './casual-time-zone.component.html',
  styleUrls: ['./casual-time-zone.component.scss']
})
export class CasualTimeZoneComponent implements OnInit {

  @Output() close = new EventEmitter();
  region = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  constructor() { }

  ngOnInit(): void {
  }

  closed() {
    this.close.emit(true);
  }

}
