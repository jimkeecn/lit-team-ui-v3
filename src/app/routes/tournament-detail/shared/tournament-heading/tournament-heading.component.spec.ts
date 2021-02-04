import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentHeadingComponent } from './tournament-heading.component';

describe('TournamentHeadingComponent', () => {
  let component: TournamentHeadingComponent;
  let fixture: ComponentFixture<TournamentHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
