import { TestBed } from '@angular/core/testing';

import { EduardoService } from './Eduardo.service';

describe('EduardoService', () => {
  let service: EduardoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduardoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
