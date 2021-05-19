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
  selector: 'history-scrims',
  templateUrl: './history-scrims.component.html',
  styleUrls: ['./history-scrims.component.scss']
})
export class HistoryScrimsComponent implements OnInit {

  scrims = new BehaviorSubject<ScrimViewModel[]>([]);
  constructor(private app: ApplicationService,
  private scrimApi:ScrimApiService, private route:Router,private clanApi:ClanApiService) { }

  ngOnInit(): void {
    this.getScrims();
  }

  getScrims() {
    this.scrimApi.GetHistoryScrim().subscribe(res => {
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


}
