import { TestBed, inject } from '@angular/core/testing';

import { AdmincuisineService } from './admincuisine.service';

describe('AdmincuisineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmincuisineService]
    });
  });

  it('should be created', inject([AdmincuisineService], (service: AdmincuisineService) => {
    expect(service).toBeTruthy();
  }));
});
