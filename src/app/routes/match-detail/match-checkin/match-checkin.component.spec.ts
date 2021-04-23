import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCheckinComponent } from './match-checkin.component';

describe('MatchCheckinComponent', () => {
  let component: MatchCheckinComponent;
  let fixture: ComponentFixture<MatchCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
