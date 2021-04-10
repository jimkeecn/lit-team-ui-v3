import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApiService } from '@app-services/api/api.service';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'match-states',
  templateUrl: './match-states.component.html',
  styleUrls: ['./match-states.component.scss']
})
export class MatchStatesComponent implements OnInit {

  @Input() matches = [];
  @Input() tournamentCodes = [];
  file: any;
  matchIndex: number = 0;
  constructor(public state: TournamentDetailStateService,
    public api: ApiService,
    public app: ApplicationService,
    public dc:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  copyTournamentCode() {
    this.app.openSnackBar("You have copied the code","success")
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  private prepareSave(matchId): any {
    let input = new FormData();
    input.append('replay', this.file);
    input.append('matchId',matchId)
    return input;
  }

  submitDisable: boolean = false;
  upload(matchId) {
    if (this.file) {
      const param = this.prepareSave(matchId);
      this.submitDisable = true;
      this.app.openSnackBar('Uploading your match replay..', 'loading', 120000);
      this.api.updateMatchResult(param).subscribe(res=>{
        this.app.openSnackBar(`You have upload your replay.`, 'success');
        this.submitDisable = false;
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    } else {
      this.app.openSnackBar(`You must select your file.`, 'error');
    }
   
  }

 
}
