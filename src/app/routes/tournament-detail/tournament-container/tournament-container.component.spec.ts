import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentContainerComponent } from './tournament-container.component';

describe('TournamentContainerComponent', () => {
  let component: TournamentContainerComponent;
  let fixture: ComponentFixture<TournamentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
