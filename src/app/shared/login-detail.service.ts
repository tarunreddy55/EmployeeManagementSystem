import { Injectable } from '@angular/core';
import { LoginDetail } from './login-detail.model';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {
 private readonly apiUrl=environment.baseUrl+'api/loginDetail';

  constructor(private _http:HttpClient) { }
  formData:LoginDetail=new LoginDetail();

  authenticate(LoginDetail:LoginDetail):Observable<LoginDetail>{
    return this._http.post<LoginDetail>(this.apiUrl,LoginDetail);
 
  }
  


}
