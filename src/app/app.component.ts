import { Component } from '@angular/core';
import { ApplicationService } from './services/app/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'test-app';
  constructor(public app:ApplicationService) {
    
  }
}
