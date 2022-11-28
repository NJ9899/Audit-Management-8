import { TestBed } from '@angular/core/testing';

import { CheckListService } from './checklist.service';

describe('ChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));


  it('should be created', () => {
    const service: CheckListService = TestBed.get(CheckListService);
    expect(service).toBeTruthy();
  });
});

// describe('ChecklistService', () => {
//   let service :CheckListService;

// beforeEach(() => {
//   TestBed.configureTestingModule({});
//   service = TestBed.get(CheckListService)
// });

// it ('should be crerated ',() =>{
//   expect(service).toBeTruthy();
// });
// });
