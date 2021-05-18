import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScrimComponent } from './new-scrim.component';

describe('NewScrimComponent', () => {
  let component: NewScrimComponent;
  let fixture: ComponentFixture<NewScrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
