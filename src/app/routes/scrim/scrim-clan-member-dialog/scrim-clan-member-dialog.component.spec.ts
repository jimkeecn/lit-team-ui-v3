import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimClanMemberDialogComponent } from './scrim-clan-member-dialog.component';

describe('ScrimClanMemberDialogComponent', () => {
  let component: ScrimClanMemberDialogComponent;
  let fixture: ComponentFixture<ScrimClanMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrimClanMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimClanMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
