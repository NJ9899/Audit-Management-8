import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTypeComponent } from './checklist-type.component';

describe('ChecklistTypeComponent', () => {
  let component: ChecklistTypeComponent;
  let fixture: ComponentFixture<ChecklistTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
