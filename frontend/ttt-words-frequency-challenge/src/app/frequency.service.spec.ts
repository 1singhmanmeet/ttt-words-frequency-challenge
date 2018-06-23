import { TestBed, inject } from '@angular/core/testing';

import { FrequencyService } from './frequency.service';

describe('FrequencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequencyService]
    });
  });

  it('should be created', inject([FrequencyService], (service: FrequencyService) => {
    expect(service).toBeTruthy();
  }));
});
