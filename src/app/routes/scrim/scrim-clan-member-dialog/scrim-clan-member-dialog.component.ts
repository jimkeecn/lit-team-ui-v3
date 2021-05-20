import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClanMemberLeagueOfLegendAccountDTO } from '@app-models/clan';
import { ClanApiService } from '@app-services/api/clan-api.service';

@Component({
  selector: 'app-scrim-clan-member-dialog',
  templateUrl: './scrim-clan-member-dialog.component.html',
  styleUrls: ['./scrim-clan-member-dialog.component.scss']
})
export class ScrimClanMemberDialogComponent implements OnInit {

  accounts: ClanMemberLeagueOfLegendAccountDTO[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private clanApi : ClanApiService) {}

  ngOnInit(): void {
    this.clanApi.GetClanLolAccounts(this.data.clanId).subscribe(res => {
      
      this.accounts = res;
    })
  }


  checkTeamOnOpgg() {
    let teams = this.accounts;
    let url = "https://oce.op.gg/multi/query=";
    let params = "";

    if (teams) {
      for (let x = 0; x < teams.length; x++){
        params += teams[x].gameName + ",";
      }
    }
   

    return url + params;
  }

}
