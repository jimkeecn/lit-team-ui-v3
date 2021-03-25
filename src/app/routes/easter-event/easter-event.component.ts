import { animate, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EasterEventApiService } from '@app-services/api/easter-event-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { EasterEventStateService } from '@app-services/state/easter-event-state.service';

@Component({
  selector: 'app-easter-event',
  templateUrl: './easter-event.component.html',
  styleUrls: ['./easter-event.component.scss'],
  animations: [
    trigger(
      'slideLeftAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  opacity: 0 }),
            animate('0.3s ease-out', 
                    style({  opacity: 1 }))
          ]
        ),
        
      ]
    )
  ]
})
export class EasterEventComponent implements OnInit {

  gameId: string;
  submitDisable: boolean = false;
  constructor(public state: EasterEventStateService, public api:EasterEventApiService, public app:ApplicationService) {
    this.state.getEvent();
    this.state.isStory = false;
    this.state.isTask = false;
  }

  ngOnInit(): void {
    
  }

  returnFromStage($event) {
    if($event)
    this.state.isStory = false;
  }

  returnFromTask($event) {
    if($event)
    this.state.isTask = false;
  }
  returnFromLadder($event) {
    if($event)
    this.state.isLadder = false;
  }

  postGameResult() {
    if (this.gameId) {
      this.submitDisable = true;
      this.app.openSnackBar('Submitting Game Result...', 'loading', 120000);
      const param = {
        gameId: parseInt(this.gameId)
      }
      this.api.postGameResult(param).subscribe(res => {
        console.log(res);
        this.app.openSnackBar("Submit successfully", 'success');
        this.submitDisable = false;
      }, (err: HttpErrorResponse) => {
        this.submitDisable = false;
        this.app.errorHandler(err);
      })
    }
 
  }


}
