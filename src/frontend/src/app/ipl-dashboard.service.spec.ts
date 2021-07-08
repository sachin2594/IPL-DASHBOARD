import { TestBed } from '@angular/core/testing';

import { IplDashboardService } from './ipl-dashboard.service';

describe('IplDashboardService', () => {
  let service: IplDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IplDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
