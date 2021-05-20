import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';
import { ScrimApiService } from "@app-services/api/scrim-api.service";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ScrimViewModel } from '@app-models/scrim';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { BehaviorSubject } from 'rxjs';
import { ClanApiService } from '@app-services/api/clan-api.service';
@Component({
  selector: 'upcoming-scrims',
  templateUrl: './upcoming-scrims.component.html',
  styleUrls: ['./upcoming-scrims.component.scss']
})
export class UpcomingScrimsComponent implements OnInit {


  scrims = new BehaviorSubject<ScrimViewModel[]>([]);
  constructor(private app: ApplicationService,
  private scrimApi:ScrimApiService, private route:Router,private clanApi:ClanApiService) { }

  ngOnInit(): void {
    this.getScrims();
  }

  getScrims() {
    this.scrimApi.GetUpcomingScrim().subscribe(res => {
      this.scrims.next(res);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    });
  }

  getOwnerClan(scrim: ScrimViewModel) {
    return {
      img: scrim.ownerClanImg,
      name: scrim.ownerClan,
      clanId:scrim.ownerClanId
    }
  }

  getChallengerClan(scrim: ScrimViewModel) {
    return {
      img: scrim.challengerClanImg,
      name: scrim.challengerClan,
      clanId: scrim.challengerClanId
    }
  }

 
  getTournamentCode(id) {
    this.scrimApi.getScrimTournamentCode(id).subscribe(res => {
      let textArea = document.createElement("textarea");
      textArea.style.top = "-1000px";
      textArea.style.left = "-1000px";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.value = res;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
      this.app.openSnackBar("We have copy the code to your clipboard", "success");
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

}
