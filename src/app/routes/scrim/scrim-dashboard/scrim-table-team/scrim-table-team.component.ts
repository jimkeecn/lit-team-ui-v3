import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScrimClanMemberDialogComponent } from '../../scrim-clan-member-dialog/scrim-clan-member-dialog.component';

@Component({
  selector: 'scrim-table-team',
  templateUrl: './scrim-table-team.component.html',
  styleUrls: ['./scrim-table-team.component.scss']
})
export class ScrimTableTeamComponent implements OnInit {

  @Input() clan: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  checkClan() {
    let id = this.clan.clanId;
    
    const dialogRef = this.dialog.open(ScrimClanMemberDialogComponent, {
      data: {
        clanId: id
      },
      hasBackdrop: true,
      disableClose: true,
      panelClass: ["dark-panel"]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
