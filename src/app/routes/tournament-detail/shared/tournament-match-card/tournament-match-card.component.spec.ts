import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentMatchCardComponent } from './tournament-match-card.component';

describe('TournamentMatchCardComponent', () => {
  let component: TournamentMatchCardComponent;
  let fixture: ComponentFixture<TournamentMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentMatchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
