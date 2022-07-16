import { TestBed } from '@angular/core/testing';

import { PopupdataService } from './popupdata.service';

describe('PopupdataService', () => {
  let service: PopupdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
