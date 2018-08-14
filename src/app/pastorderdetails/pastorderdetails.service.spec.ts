import { TestBed, inject } from '@angular/core/testing';

import { PastorderdetailsService } from './pastorderdetails.service';

describe('PastorderdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastorderdetailsService]
    });
  });

  it('should be created', inject([PastorderdetailsService], (service: PastorderdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
