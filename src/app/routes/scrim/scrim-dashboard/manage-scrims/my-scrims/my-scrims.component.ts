import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApplicationService } from '@app-services/app/application.service';
import { ScrimApiService } from "@app-services/api/scrim-api.service";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ScrimChallenger, ScrimViewModel } from '@app-models/scrim';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { BehaviorSubject } from 'rxjs';
import { ClanApiService } from '@app-services/api/clan-api.service';
@Component({
  selector: 'my-scrims',
  templateUrl: './my-scrims.component.html',
  styleUrls: ['./my-scrims.component.scss']
})
export class MyScrimsComponent implements OnInit {

  amIOwner: boolean = false;
  @Input('_amIOwner')
  set getamIOwner(val) {
    this.amIOwner = val;
    if (val) {
      this.getScrims();
    }
  };
  scrims = new BehaviorSubject<ScrimViewModel[]>([]);
  constructor(private app: ApplicationService,
  private scrimApi:ScrimApiService, private route:Router,private clanApi:ClanApiService) { }

  ngOnInit(): void {
    
  }

  getScrims() {
    this.scrimApi.GetMyScrim().subscribe(res => {
      this.scrims.next(res);
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

  getClan(clan: ScrimChallenger) {
    return {
      img: clan.clanImg,
      name: clan.clanName,
      clanId:clan.clanId
    }
  }

  disableScrimRequest(id) {
    let confirm = window.confirm("Are you sure to remove this scrim?");
    if (confirm) {
      this.scrimApi.disableScrimRequest(id).subscribe(res => {
        this.app.openSnackBar('You have removed a scrim.', 'success');
        this.removeScrimFromList(id);
      }, (err: HttpErrorResponse) => {
        this.app.errorHandler(err);
      })
    }
    
  }

  removeScrimFromList(id) {
    let scrims = [...this.scrims.value];
    let index = scrims.findIndex(x => x.id == id);
    scrims.splice(index, 1);
    this.scrims.next(scrims);
  }


  pickClan(scrimId, clanId) {
    debugger;
    let confirm = window.confirm("Are you sure to pick this clan for your opponent?");
    if (confirm) {
      this.scrimApi.pickScrimRequest(scrimId, clanId).subscribe(res => {
        this.app.openSnackBar('You have selected a Opponent.', 'success');
        this.getScrims();
      }, (err: HttpErrorResponse) => {
        this.app.errorHandler(err);
      })
    }
  }
}
