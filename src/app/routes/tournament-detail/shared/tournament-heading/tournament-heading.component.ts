import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tournament-heading',
  templateUrl: './tournament-heading.component.html',
  styleUrls: ['./tournament-heading.component.scss']
})
export class TournamentHeadingComponent implements OnInit {


  @Input() tournamentName: string;
  @Input() tournamentTime: Date;
  @Input() enableRegister: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
