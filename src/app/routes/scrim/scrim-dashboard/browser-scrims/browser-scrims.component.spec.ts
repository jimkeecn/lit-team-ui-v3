import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserScrimsComponent } from './browser-scrims.component';

describe('BrowserScrimsComponent', () => {
  let component: BrowserScrimsComponent;
  let fixture: ComponentFixture<BrowserScrimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserScrimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserScrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
