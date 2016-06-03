import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorage Service', () => {
  beforeEachProviders(() => [LocalStorageService]);

  it('should ...',
      inject([LocalStorageService], (service: LocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
