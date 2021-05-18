import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimTableTeamComponent } from './scrim-table-team.component';

describe('ScrimTableTeamComponent', () => {
  let component: ScrimTableTeamComponent;
  let fixture: ComponentFixture<ScrimTableTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimTableTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimTableTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
