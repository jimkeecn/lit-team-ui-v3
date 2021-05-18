import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-scrims',
  templateUrl: './manage-scrims.component.html',
  styleUrls: ['./manage-scrims.component.scss']
})
export class ManageScrimsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  createNewScrim() {
    this.route.navigate(['/scrims/new']);
  }

}
