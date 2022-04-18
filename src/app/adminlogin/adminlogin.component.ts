import { Component, OnInit } from '@angular/core';
import { Validators} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginDetailService } from '../shared/login-detail.service';

import { Router } from '@angular/router';
import { LoginDetail } from '../shared/login-detail.model';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminLoginform:FormGroup;
  invalid: boolean =false;
  
  
  constructor(private _adminloginservice:LoginDetailService,private router:Router) {

    this.adminLoginform = new FormGroup({
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

    this._adminloginservice.authenticate(LoginDetail).subscribe(data => {
      console.log(data);
      this.router.navigate(['/dashboard']);
    },
    
    error => {
      console.log(error);
     
      this.invalid = true;
      
    },
    
    )
  }
}



