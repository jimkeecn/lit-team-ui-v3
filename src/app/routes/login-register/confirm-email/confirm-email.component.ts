import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  token:string;
  email:string;
  constructor(public route: ActivatedRoute, private auth: AuthService,
    private router: Router, private app: ApplicationService) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        console.log(params);
        if(params){
           this.token = params.get('token');
           this.email = params.get('email');
          this.auth.confirmEmail({
            token:params.get('token'),
            email:params.get('email')
          }).subscribe(res=>{
            if(res){
              this.app.openSnackBar("Email Confirmed, Please login to your account.","success");
              this.router.navigate(['sign'])
            }
          })
        }
      })
    }

}
