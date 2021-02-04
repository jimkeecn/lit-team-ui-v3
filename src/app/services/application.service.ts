import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Location } from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(public route: Router,location: Location) {
    this.route.events.subscribe(val => { 
      this.removeBodyClasses();
      var url = location.path();
      if (url.includes("tournament-detail")) {
        url = "/tournament-detail";
      }
      switch (url) {
        case "/home":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('site-layout--horizontal');
          break;
        case "/upcoming-tournaments":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg--dotted-3x3');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          break;
        case "/tournament-detail":
          document.body.classList.add('preloader-is--active');
          document.body.classList.add('bg-fixed');
          document.body.classList.add('bg--texture-05');
          document.body.classList.add('bg-image');
          document.getElementById("wrapper").classList.add("site-content--center");
          document.getElementById("wrapper").classList.add("page");
          break;
        default:
          break;
      }
      setTimeout(() => {
        document.body.classList.remove('preloader-is--active');
      }, 1500);
    })
  }
  
  removeBodyClasses() {
    document.body.classList.remove('preloader-is--active');
    document.body.classList.remove('site-layout--horizontal');
    document.body.classList.remove('bg-fixed');
    document.body.classList.remove('bg--texture-05');
    document.body.classList.remove('bg--dotted-3x3');
    document.body.classList.remove('bg-image');
    document.getElementById("wrapper").classList.remove("site-content--center");
    document.getElementById("wrapper").classList.remove("page");
  }


}




