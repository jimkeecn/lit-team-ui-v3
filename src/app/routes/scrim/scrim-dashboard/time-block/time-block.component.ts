import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'scrim-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.scss']
})
export class TimeBlockComponent implements OnInit {

  @Input() date;
  @Input() number;
  constructor() { }

  ngOnInit(): void {
  }

}
