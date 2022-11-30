import { TestBed } from '@angular/core/testing';

import { AuditStatusService } from './audit-status/audit-status.service';

describe('AuditStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditStatusService = TestBed.get(AuditStatusService);
    expect(service).toBeTruthy();
  });
});
