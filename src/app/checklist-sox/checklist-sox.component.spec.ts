import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSoxComponent } from './checklist-sox.component';

describe('ChecklistSoxComponent', () => {
  let component: ChecklistSoxComponent;
  let fixture: ComponentFixture<ChecklistSoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistSoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistSoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
