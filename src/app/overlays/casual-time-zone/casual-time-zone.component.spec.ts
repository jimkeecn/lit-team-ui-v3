import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualTimeZoneComponent } from './casual-time-zone.component';

describe('CasualTimeZoneComponent', () => {
  let component: CasualTimeZoneComponent;
  let fixture: ComponentFixture<CasualTimeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualTimeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualTimeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
