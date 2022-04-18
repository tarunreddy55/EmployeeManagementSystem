import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistboardComponent } from './employeelistboard.component';


describe('EmployeelistboardComponent', () => {
  let component: EmployeelistboardComponent;
  let fixture: ComponentFixture<EmployeelistboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistboardComponent ],
      imports:[HttpClientModule],
      providers:[HttpClientModule]
     
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
