import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistInternalComponent } from './checklist-internal.component';

describe('ChecklistInternalComponent', () => {
  let component: ChecklistInternalComponent;
  let fixture: ComponentFixture<ChecklistInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
