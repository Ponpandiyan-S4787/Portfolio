import { TestBed } from '@angular/core/testing';

import { HomeSmartService } from './home-smart.service';

describe('HomeSmartService', () => {
  let service: HomeSmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
