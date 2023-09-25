import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registeruser } from '../register-user';
import { Loginuser } from '../Loginuser';
import { registeremployers } from '../register-employers';
import { Loginemployers } from '../Loginemployers';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/api/auth/';

  constructor(private sessionService: SessionService, private http: HttpClient) { }

  registeruser(user: registeruser): Observable<any> {
    return this.http.post(this.url + 'saveuser', user);
  }  
  Loginuser(userData: Loginuser): Observable<any> {
    return this.http.post(this.url + 'loginuser', userData);
}
  registeremployers(employers : registeremployers){
  return this.http.post (this.url +'saveemployers',employers)
}
Loginemployers(userData: Loginemployers): Observable<any> {
  return this.http.post(this.url + 'loginuser', userData);
}
}
