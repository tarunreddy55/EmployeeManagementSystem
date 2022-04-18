import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeDetailService } from './employee-detail.service';

describe('EmployeeDetailService', () => {
  let service: EmployeeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClientModule]
    });
    service = TestBed.inject(EmployeeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('fetch all employees',()=>{
    service.fetchEmployees().subscribe(
      (data)=>{
        
      }
    )
  })
});
