import { Component, OnInit } from '@angular/core';
import { LoginDetail } from '../shared/login-detail.model';
import { Validators} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginDetailService } from '../shared/login-detail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  
  employeeLoginform:FormGroup;
  invalid: boolean =false;

  constructor(public _employeeloginservice:LoginDetailService, private router: Router) { 

  this.employeeLoginform = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  })

 }


ngOnInit(): void {
}





onSubmit( formVal:FormGroup){
  this.invalid=false;
 
  console.log(formVal.value);
  let LoginDetail:LoginDetail={
    employeeId:formVal.value.employeeId,
    username:formVal.value.username,
    password:formVal.value.password
  }

  this._employeeloginservice.authenticate(LoginDetail).subscribe(data => {
    console.log(data);
    this.router.navigate(['/employeelistboard']);
  },
  
  error => {
    console.log(error);
   
    this.invalid = true;
    
  },
  
  )
}
}

