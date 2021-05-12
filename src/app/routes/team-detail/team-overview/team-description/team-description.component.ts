import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'team-description',
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.scss']
})
export class TeamDescriptionComponent implements OnInit {

  @Input() description;
  constructor() { }

  ngOnInit(): void {
  }

}
