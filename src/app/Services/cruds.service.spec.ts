import { TestBed } from '@angular/core/testing';

import { CRUDSService } from './cruds.service';

describe('CRUDSService', () => {
  let service: CRUDSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
