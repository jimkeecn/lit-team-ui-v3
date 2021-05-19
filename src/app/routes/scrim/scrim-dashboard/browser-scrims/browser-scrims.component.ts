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
  selector: 'app-browser-scrims',
  templateUrl: './browser-scrims.component.html',
  styleUrls: ['./browser-scrims.component.scss']
})
export class BrowserScrimsComponent implements OnInit {

  scrims = new BehaviorSubject<ScrimViewModel[]>([]);
  timeBlocks: any[] = [];
  constructor(private app: ApplicationService,
  private scrimApi:ScrimApiService, private route:Router,private clanApi:ClanApiService) { }

  ngOnInit(): void {
    this.getScrims();
  }

  getScrims() {
    this.scrimApi.GetAllScrim().subscribe(res => {
      this.scrims.next(res);
      this.calculateTimeBlocks();
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    });
  }


  joinScrimRequest(id) {
    let confirm = window.confirm("Are you sure to join this scrim?");
    if (confirm) {
      this.scrimApi.joinScrimRequest(id).subscribe(res => {
        this.app.openSnackBar("You have requested to join this scrim.","success")
      }, (err: HttpErrorResponse) => {
        this.app.errorHandler(err);
      })
    }
    
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

  private calculateTimeBlocks() {
    let scrims = [...this.scrims.value];
    const groups = scrims.reduce((groups, obj) => {
      const date = obj.date.toString().split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      if (obj.challengerClanId == 0) {
        groups[date].push(obj);
      }
      return groups;
    }, {})

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        objs: groups[date]
      };
    });

    this.timeBlocks = groupArrays;
  }

}
