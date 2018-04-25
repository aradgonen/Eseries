import { TestBed, inject } from '@angular/core/testing';

import { ConnectedUserService } from './connected-user.service';

describe('ConnectedUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectedUserService]
    });
  });

  it('should be created', inject([ConnectedUserService], (service: ConnectedUserService) => {
    expect(service).toBeTruthy();
  }));
});
