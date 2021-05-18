import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageScrimsComponent } from './manage-scrims.component';

describe('ManageScrimsComponent', () => {
  let component: ManageScrimsComponent;
  let fixture: ComponentFixture<ManageScrimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageScrimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageScrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
