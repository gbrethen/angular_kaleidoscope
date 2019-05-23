import { TestBed } from '@angular/core/testing';

import { ComponentDisplayService } from './component-display.service';

describe('ComponentDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentDisplayService = TestBed.get(ComponentDisplayService);
    expect(service).toBeTruthy();
  });
});
