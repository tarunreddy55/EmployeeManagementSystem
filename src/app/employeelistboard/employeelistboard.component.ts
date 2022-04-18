import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetail } from '../shared/employee-detail.model';
import { EmployeeDetailService } from '../shared/employee-detail.service';


@Component({
  selector: 'app-employeelistboard',
  templateUrl: './employeelistboard.component.html',
  styleUrls: ['./employeelistboard.component.css']
})
export class EmployeelistboardComponent implements OnInit {


  employeeList: EmployeeDetail[] = [];
  formObject: FormGroup;


  
  employeeListLoadingFlag: boolean = true;

  constructor(private employeeService: EmployeeDetailService) { 
    this.formObject = new FormGroup({
      id: new FormControl(0, Validators.required),
      name: new FormControl("", Validators.required),
      emailId: new FormControl("", Validators.required),
      domain: new FormControl("", Validators.required),
      contactNo: new FormControl("", [Validators.required,  Validators.minLength(5), Validators.maxLength(10)]),
     experience: new FormControl("", Validators.required),
      salary: new FormControl("", [Validators.required, Validators.min(1)] ),
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

}
