import { TestBed, inject } from '@angular/core/testing';

import { NamesService } from './names.service';
import {HttpClientModule} from '@angular/common/http';


describe('NamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamesService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([NamesService], (service: NamesService) => {
    expect(service).toBeTruthy();
  }));
});
