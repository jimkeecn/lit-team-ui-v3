import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BracketFormat, TeamRank } from '@app-models/static';
import { StaticService } from '@app-services/static/static.service';
import { ScrimUpdateModel } from "@app-models/scrim";
import { ApplicationService } from '@app-services/app/application.service';
import { ScrimApiService } from "@app-services/api/scrim-api.service";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-new-scrim',
  templateUrl: './new-scrim.component.html',
  styleUrls: ['./new-scrim.component.scss']
})
export class NewScrimComponent implements OnInit {

  ranks: TeamRank[] = [];
  types: BracketFormat[] = [];
  errors: any[] = [];
  detailForm = this.fb.group({
    minRankId: new FormControl(0,[Validators.required]),
    maxRankId: new FormControl(0, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    gameDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    gameFormatId: new FormControl(0, [Validators.required])
  })

  submitDisable: boolean = false;
  param: ScrimUpdateModel;

  constructor(private staticApi: StaticService,
    private fb: FormBuilder, private app: ApplicationService,
  private scrimApi:ScrimApiService, private route:Router) { }

  ngOnInit(): void {
    this.staticApi.getTeamRank().subscribe(res => {
      this.ranks = res;
    })
    this.staticApi.getBracketFormat().subscribe(res => {
      this.types = res;
    })
  }

  submit() {
    this.errors = [];
    if (this.detailForm.valid) {
      console.log(this.detailForm.value);
      let confirm = window.confirm("Have you read the information above, press OK to continue");
      if (confirm) {
        this.scrimApi.CreateNewScrim(this.detailForm.value).subscribe(res => {
          this.submitDisable = false;
          this.app.openSnackBar('You have created a new scrim.', 'success');
          this.route.navigate(['scrims/manage']);
        }, (err: HttpErrorResponse) => {
          this.submitDisable = false;
          this.app.errorHandler(err);
        });
      }
    } else {
      let errorList = this.app.formErrorHandler(this.detailForm);
      errorList.forEach(error => { 
          this.errors.push(ScrimUpdateModel.getErrorMessage(error.field,error.error))
      })
    }
  }

}
