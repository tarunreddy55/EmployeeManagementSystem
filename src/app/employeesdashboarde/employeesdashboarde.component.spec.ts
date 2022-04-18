import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import {  Observable, of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeDetail } from '../shared/employee-detail.model';
import { EmployeeDetailService } from '../shared/employee-detail.service';

import { EmployeesdashboardeComponent } from './employeesdashboarde.component';

describe('EmployeesdashboardeComponent', () => {
  let component: EmployeesdashboardeComponent;
  let fixture: ComponentFixture<EmployeesdashboardeComponent>;


  let fakeEmployeelist:EmployeeDetail[]=[];
  let fakeEmployeeService:Pick<EmployeeDetailService,keyof EmployeeDetailService>

beforeEach(async () => {
  
  fakeEmployeeService={
    fetchEmployees():Observable<EmployeeDetail[]>{
      return of(fakeEmployeelist);
    },
    addOrUpdateEmployee(formVal: FormGroup): Observable<EmployeeDetail> {

      let newEmp: EmployeeDetail = {
        employeeId: formVal.value.id==null?fakeEmployeelist.length+1:formVal.value.id,
        employeeName : formVal.value.name,
        emailId: formVal.value.emailId,
        domain: formVal.value.domain,
        contactNo: formVal.value.contactNo,
        experience: formVal.value.experience,
        salary: formVal.value.salary
      }
      if (formVal.value.formType == "create") {
        fakeEmployeelist.push(newEmp);
        return of(newEmp);
      }
      else {
        let empIndex = -1;
        for (let i = 0; i < fakeEmployeelist.length; i++) {
          if (fakeEmployeelist[i].employeeId == formVal.value.id) {
            empIndex = i;
            break;
          }
        }

        if (empIndex != -1) {
          fakeEmployeelist[empIndex] = newEmp;
          return of(newEmp);
        }
        else {
          return of();
        }
      }

      },
      deleteEmployee(id: number){
      let empIndex = -1;
      for (let i = 0; i < fakeEmployeelist.length; i++) {
        if (fakeEmployeelist[i].employeeId == id) {
          empIndex = i;
          break;
        }
      }

      if (empIndex == -1) {
        return of();
      }
      else {
        fakeEmployeelist.splice(empIndex,1);
        return of(fakeEmployeelist[empIndex]);
      }
    }

  };
  spyOn(fakeEmployeeService, 'fetchEmployees').and.callThrough();
  spyOn(fakeEmployeeService, 'addOrUpdateEmployee').and.callThrough();
 spyOn(fakeEmployeeService, 'deleteEmployee').and.callThrough();



    await TestBed.configureTestingModule({
      declarations: [ EmployeesdashboardeComponent ],
      imports:[HttpClientModule,AppRoutingModule],
      providers:[
       {provide:EmployeeDetailService,useValue:fakeEmployeeService}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesdashboardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

it('sets the deleteuser and deleteuserid variables',()=>{
  component.onDeleteEmp(1,'tarun');
  expect(component.deleteuserid).toBe(1);
  expect(component.deleteuser).toBe('tarun');
})

it('toggle the deleteconfirmation variable',()=>{
 
    expect(component.deleteconfirmation).toBeFalse;
    component.toggleDeleteConfirmation();
    expect(component.deleteconfirmation).toBeTrue();
  
})

it('should create new employee',()=>{

  let currentcount=fakeEmployeelist.length;
  component.formObject.setValue({
    id: 1,
    name: "new employee",
    emailId:"newemployee@gmail.com",
    domain:"AI",
    contactNo: "9393291625",
   experience: "3",
    salary: "18",
    formType: "create"
  })
  
component.onSubmit(component.formObject);
console.log(fakeEmployeelist);

expect(currentcount +1).toEqual(fakeEmployeelist.length);
})


it ('should create a another employee', () => {
  let currentcount = fakeEmployeelist.length;

  component.formObject.setValue({
    id: null,
    name: "new employee 2",
    emailId:"newemployee2@gmail.com",
    domain:"AI",
    contactNo: "9393291625",
   experience: "3",
    salary: "18",
    formType: "create"
  })

  component.onSubmit(component.formObject);
  console.log(fakeEmployeelist);
  
  expect(currentcount + 1 ).toEqual(fakeEmployeelist.length);

})

it ( 'should give employee list', () => {
  component.getEmployeeList();

  let empList = component.employeeList;

  expect(fakeEmployeeService.fetchEmployees).toHaveBeenCalled();
  expect(empList.length).toBeGreaterThanOrEqual(0);
})


it ('should update the domain to "Data Science" [id given is "1"]', () => {

  let empIndex: number = -1;

  for (let i = 0; i < fakeEmployeelist.length; i++) {
    if (fakeEmployeelist[i].employeeId == 1) {
      empIndex = i;
      break;
    }
  }

  component.formObject.setValue({
    id: 1,
    name: "new employee ",
    emailId:"newemployee@gmail.com",
    domain:"Data Science",
    contactNo: "9393291625",
   experience: "3",
    salary: "18",
    formType: "update"
  })

  component.onSubmit(component.formObject);

  
  expect(empIndex).toBeGreaterThan(-1);
 
  expect(fakeEmployeelist[empIndex].domain).toBe("Data Science");

})

it('should delete the employee with given id [id given is "1"]',()=>{
  let id:number=1;
  let emplistlengthbefore:number=fakeEmployeelist.length;
  component.deleteEmployee(id);
  let emplistlengthafter:number=fakeEmployeelist.length;
  expect(emplistlengthbefore).toBe(emplistlengthafter+1);
})


});
