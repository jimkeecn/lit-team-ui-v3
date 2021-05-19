import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClanApiService} from '@app-services/api/clan-api.service'
import { AuthService } from '@app-services/auth/auth.service';
@Component({
  selector: 'app-manage-scrims',
  templateUrl: './manage-scrims.component.html',
  styleUrls: ['./manage-scrims.component.scss']
})
export class ManageScrimsComponent implements OnInit {

  amIOwner: boolean = false;
  constructor(private route:Router, private clanApi:ClanApiService, private auth:AuthService) { }

  ngOnInit(): void {
    if (this.auth.isLogined()) {
      this.clanApi.AmIClanOwner().subscribe(res => {
        this.amIOwner = res;
      })
    } else {
      this.route.navigate(['/scrims/browser']);
    }
  }

  createNewScrim() {
    this.route.navigate(['/scrims/new']);
  }

}
