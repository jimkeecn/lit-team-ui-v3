import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTeamDetailComponent } from './tournament-team-detail.component';

describe('TournamentTeamDetailComponent', () => {
  let component: TournamentTeamDetailComponent;
  let fixture: ComponentFixture<TournamentTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
