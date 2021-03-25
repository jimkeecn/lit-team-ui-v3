import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEventTasksComponent } from './easter-event-tasks.component';

describe('EasterEventTasksComponent', () => {
  let component: EasterEventTasksComponent;
  let fixture: ComponentFixture<EasterEventTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterEventTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEventTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
