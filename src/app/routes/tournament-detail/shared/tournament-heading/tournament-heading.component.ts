import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';

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

  register() {
    document.querySelector(".tournament-container").classList.add("registration-overlay-active");
  }
}
