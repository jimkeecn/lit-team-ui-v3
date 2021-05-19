import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryScrimsComponent } from './history-scrims.component';

describe('HistoryScrimsComponent', () => {
  let component: HistoryScrimsComponent;
  let fixture: ComponentFixture<HistoryScrimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryScrimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryScrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
