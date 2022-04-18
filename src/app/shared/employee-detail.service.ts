import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmployeeDetail } from './employee-detail.model';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  private apiUrl = environment.baseUrl + 'api/EmployeeDetail';

  constructor(private http: HttpClient) { }

  fetchEmployees(): Observable<EmployeeDetail[]> {
    return this.http.get<EmployeeDetail[]>(this.apiUrl);
  }

  addOrUpdateEmployee(formVal: FormGroup): Observable<EmployeeDetail> {

    let newEmp: EmployeeDetail = {
      employeeId: formVal.value.id,
      employeeName : formVal.value.name,
      emailId: formVal.value.emailId,
      domain: formVal.value.domain,
      contactNo: formVal.value.contactNo,
      experience: formVal.value.experience,
      salary: formVal.value.salary
    }

    if(formVal.value.formType == "create") {
      newEmp.employeeId=0;
      return this.http.post<EmployeeDetail>(this.apiUrl, newEmp);
    }
    else {
      return this.http.put<EmployeeDetail>(this.apiUrl + "/" + formVal.value.id, newEmp);
    }
  }

  deleteEmployee(id: number) {
    return this.http.delete<EmployeeDetail>(this.apiUrl+'/'+id);
  }

}