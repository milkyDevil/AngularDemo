import { TestBed } from '@angular/core/testing';

import { UploadrecipeService } from './uploadrecipe.service';

describe('UploadrecipeService', () => {
  let service: UploadrecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadrecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
