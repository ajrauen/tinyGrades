import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ClassService } from './class.service';

describe('Class Service', () => {
  beforeEachProviders(() => [ClassService]);

  it('should ...',
      inject([ClassService], (service: ClassService) => {
    expect(service).toBeTruthy();
  }));
});
