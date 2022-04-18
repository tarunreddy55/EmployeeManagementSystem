
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeDetail } from '../shared/employee-detail.model';
import { EmployeeDetailService } from '../shared/employee-detail.service';

@Component({
  selector: 'app-employeesdashboarde',
  templateUrl: './employeesdashboarde.component.html',
  styleUrls: ['./employeesdashboarde.component.css']
})
export class EmployeesdashboardeComponent implements OnInit {

 
  employeeList: EmployeeDetail[] = [];
  formObject: FormGroup;

 
 deleteuser:string = "";
 deleteuserid: number = -1;
  deleteconfirmation:boolean = false;

  
  employeeListLoadingFlag: boolean = true;

  constructor(private employeeService: EmployeeDetailService) { 
    this.formObject = new FormGroup({
      id: new FormControl(0, Validators.required),
      name: new FormControl("", Validators.required),
      emailId: new FormControl("", Validators.required),
      domain: new FormControl("", Validators.required),
      contactNo: new FormControl("", [Validators.required,  Validators.minLength(5), Validators.maxLength(10)]),
     experience: new FormControl("", Validators.required),
      salary: new FormControl("", [Validators.required, Validators.min(0)] ),
      formType: new FormControl("create", Validators.required)
    })
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeListLoadingFlag = true;
    this.employeeService.fetchEmployees().subscribe(data => {
      this.employeeList = data;
      this.employeeListLoadingFlag = false;
      console.log(data);
    })
  }

  setCreateForm() {
    this.formObject.reset();
    this.formObject.setValue({
      id: 1,
      name: "",
      emailId: "",
      domain: "",
      contactNo: "",
     experience: "",
      salary: "",
      formType: "create"
    })
    console.log(this.formObject.value);
    
  }

  setUpdateForm(employee: EmployeeDetail) {
    this.formObject.setValue({
      id: employee.employeeId,
      name: employee.employeeName,
      emailId: employee.emailId,
      domain: employee.domain,
      contactNo: employee.contactNo,
     experience: employee.experience,
      salary: employee.salary,
      formType: "update"
    })
    console.log(this.formObject.value);
    
  } 

  onSubmit(formObj: FormGroup) {
    console.log("Submit");
    console.log(formObj.value);
    

    this.employeeService.addOrUpdateEmployee(formObj).subscribe(data => {
      console.log(data);
      this.getEmployeeList();

      document.getElementById('modalCloseBtn')?.click();
    });
    
  }

  onDeleteEmp(id: number = -1, name: string) {
    this.deleteuser = name;
    this.deleteuserid = id;
  }
 onsave(){
   
 }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployeeList();

      document.getElementById('deleteModalbtn')?.click();
      
    })
  }


  toggleDeleteConfirmation() {
    this.deleteconfirmation = !this.deleteconfirmation;
  }

  
 


}
