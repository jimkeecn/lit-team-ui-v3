import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatchCheckInTeam } from '@app-models/tournament';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { MatchStatesComponent } from '../match-states/match-states.component';

@Component({
  selector: 'match-checkin',
  templateUrl: './match-checkin.component.html',
  styleUrls: ['./match-checkin.component.scss']
})
export class MatchCheckinComponent implements OnInit {
  timer: any = "";
  isReady: boolean = false
  isCollapsed: boolean = false;
  teamA: MatchCheckInTeam;
  teamB: MatchCheckInTeam;
  matchId: number;
  submitDisable: boolean = false;
  isMyGame: boolean = false;
  isPassCheckedIn: boolean = false;
  isStartCheckedIn: boolean = true;
  constructor(private api:TourneyApiService, private state: TournamentDetailStateService, private auth:AuthService,private app:ApplicationService) { }

  ngOnInit(): void {
    this.state.bracketOverview$.subscribe(bracket => {
      
      if (bracket && bracket.matchId) {
        this.checkInTimer(bracket.date)
        this.matchId = bracket.matchId;
        this.api.getBracketCheckIns(bracket.matchId).subscribe(res => {
          console.log(res);
          
          this.teamA = res[0];
          this.teamB = res[1];
          this.checkIsReady(res);
        })
      }
    })
  
  }

  private checkIsReady(teamList: MatchCheckInTeam[]) {
    let myId = this.auth.getMyId();
    teamList.forEach(team => {
      let isIdInList = team.individuals.find(x => x.userId == myId);
      if (isIdInList) {
        this.isMyGame = true;
        if (isIdInList.isCheckedIn) {
          this.isReady = true;
        }
      }
       
    })
  }

  checkOrUnCheck() {
    this.submitDisable = true;
    if (this.isReady) {
      this.api.removeCheckInBracket(this.matchId).subscribe(res => {
        this.submitDisable = false;
        this.isReady = false;
        this.setMyReadyStatus();
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    } else {
      this.api.checkInBracket(this.matchId).subscribe(res => {
        this.submitDisable = false;
        this.isReady = true;
        this.setMyReadyStatus();
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    }
  }

  setMyReadyStatus() {
    var myAStatus = this.teamA.individuals.find(x => x.userId == this.auth.getMyId());
    if (myAStatus != null) {
      myAStatus.isCheckedIn = !myAStatus.isCheckedIn;
    } else {
      var myBStatus = this.teamB.individuals.find(x => x.userId == this.auth.getMyId());
      myBStatus.isCheckedIn = !myBStatus.isCheckedIn;
    }
  }

  

  checkInTimer(dateEnd) {
    debugger;
    let currentDate = new Date().getTime();
    let targetDate = new Date(dateEnd).getTime(); // set the countdown date

    if (currentDate > targetDate ) {
      this.isPassCheckedIn = true;
    } else if (currentDate < targetDate - 900000) {
      this.isStartCheckedIn = false;
    } else {
      let hours, minutes, seconds; // variables for time units
      let count = 0;
      var getCountdown = function (c){
          // find the amount of "seconds" between now and target
          let secondsLeft = ((targetDate - currentDate) / 1000) - c;
          secondsLeft %= 86400;
          hours = pad( Math.floor( secondsLeft / 3600 ) );
          secondsLeft %= 3600;
          minutes = pad( Math.floor( secondsLeft / 60 ) );
          seconds = pad( Math.floor( secondsLeft % 60 ) );
          // format countdown string + set tag value
        //console.log(`${hours > 0? hours + ":" : ""} ${minutes > 0? minutes + ":" : ""} ${seconds}`);
        document.getElementById('timer').innerHTML = `${Math.floor( secondsLeft / 3600 ) > 0? hours + ":" : ""} ${Math.floor( secondsLeft / 60 ) > 0? minutes + ":" : ""} ${Math.floor( secondsLeft % 60 ) > 0 ? seconds : "00" }`;
      }
      function pad(n) {
          return (n < 10 ? '0' : '') + n;
      }   
      getCountdown(0);
      setInterval(function () { getCountdown(count++ ); }, 1000);
    }
 
  }

 
}
