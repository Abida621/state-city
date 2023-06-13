import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  subject = new Subject();
  subject1 = new Subject();
  constructor(private http: HttpClient) { }

  url = `https://api.minebrat.com/api/v1/states`
  getCommonApi() {
    return this.http.get(this.url);
  }
}
