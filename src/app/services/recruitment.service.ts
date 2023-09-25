import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {
  url = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }
  getRecruitment(){
    return this.httpClient.get(this.url);
  }
  
}
