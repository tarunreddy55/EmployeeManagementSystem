import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { LoginDetailService } from './login-detail.service';

describe('LoginDetailService', () => {
  let service: LoginDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,AppRoutingModule],
      providers:[HttpClientModule]
    });
    service = TestBed.inject(LoginDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  
});
 