import { TestBed } from '@angular/core/testing';

import { SkillmasterService } from './skillmaster.service';

describe('SkillmasterService', () => {
  let service: SkillmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
