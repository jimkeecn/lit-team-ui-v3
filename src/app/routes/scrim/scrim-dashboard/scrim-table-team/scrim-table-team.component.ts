import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'scrim-table-team',
  templateUrl: './scrim-table-team.component.html',
  styleUrls: ['./scrim-table-team.component.scss']
})
export class ScrimTableTeamComponent implements OnInit {

  @Input() clan: any;

  constructor() { }

  ngOnInit(): void {
  }

}
