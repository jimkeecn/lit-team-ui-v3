import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';
import { ScrimApiService } from "@app-services/api/scrim-api.service";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ScrimViewModel } from '@app-models/scrim';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ClanApiService } from '@app-services/api/clan-api.service';
import { StaticService } from '@app-services/static/static.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { TeamRank } from '@app-models/static';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-browser-scrims',
  templateUrl: './browser-scrims.component.html',
  styleUrls: ['./browser-scrims.component.scss']
})
export class BrowserScrimsComponent implements OnInit {

  ranks: TeamRank[] = [];
  scrims = new BehaviorSubject<ScrimViewModel[]>([]);
  originalScrims : ScrimViewModel[] = [];
  timeBlocks: any[] = [];
  filterForm = this.fb.group({
    minRankId: new FormControl(0,),
    maxRankId: new FormControl(0,),
  })
  constructor(private app: ApplicationService,
    private scrimApi: ScrimApiService, private route: Router, private clanApi: ClanApiService,
    private staticApi: StaticService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getScrims();
    this.staticApi.getTeamRank().pipe(map(x => {
      let defaultValue = TeamRank.createDefaultValue();
      x.splice(0, 0, defaultValue);
      return x;
    })).subscribe(res => {
      this.ranks = res;
    })

    combineLatest([this.filterForm.valueChanges]).subscribe(res => {
      let filter = res[0];
      let scrims = [...this.originalScrims];
      let max = filter.maxRankId;
      let min = filter.minRankId;
      if (max > 0 && min > 0) {
        scrims = scrims.filter(x =>x.maxRankId <=  max  &&  x.minRankId >= filter.minRankId );
      } else if (max > 0 && min == 0) {
        scrims = scrims.filter(x =>x.maxRankId <=  max);
      } else if (max == 0 && min > 0) {
        scrims = scrims.filter(x =>x.minRankId >=  min);
      }
      this.scrims.next(scrims);
    })
  }

  getScrims() {
    this.scrimApi.GetAllScrim().subscribe(res => {
      this.originalScrims = res;
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
        this.app.openSnackBar("You will receive a notification once you got approved.","success")
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
