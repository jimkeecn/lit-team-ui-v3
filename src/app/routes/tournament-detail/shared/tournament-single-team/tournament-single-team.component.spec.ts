import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSingleTeamComponent } from './tournament-single-team.component';

describe('TournamentSingleTeamComponent', () => {
  let component: TournamentSingleTeamComponent;
  let fixture: ComponentFixture<TournamentSingleTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentSingleTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentSingleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
