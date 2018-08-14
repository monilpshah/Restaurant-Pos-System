import { TestBed, inject } from '@angular/core/testing';

import { ForgetpasswordService } from './forgetpassword.service';

describe('ForgetpasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetpasswordService]
    });
  });

  it('should be created', inject([ForgetpasswordService], (service: ForgetpasswordService) => {
    expect(service).toBeTruthy();
  }));
});
