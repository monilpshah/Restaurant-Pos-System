import { TestBed, inject } from '@angular/core/testing';

import { SignupsService } from './signups.service';

describe('SignupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignupsService]
    });
  });

  it('should be created', inject([SignupsService], (service: SignupsService) => {
    expect(service).toBeTruthy();
  }));
});
