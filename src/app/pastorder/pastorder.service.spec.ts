import { TestBed, inject } from '@angular/core/testing';

import { PastorderService } from './pastorder.service';

describe('PastorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastorderService]
    });
  });

  it('should be created', inject([PastorderService], (service: PastorderService) => {
    expect(service).toBeTruthy();
  }));
});
