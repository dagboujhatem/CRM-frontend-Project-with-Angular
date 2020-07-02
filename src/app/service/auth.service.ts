import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl = environment.baseuri;
  responseData = localStorage.getItem('token');
  constructor(private router : Router , private http : HttpClient) { }
  signin(data) {
    const url = `${this.BaseUrl}/pme/login`;
    console.log(data);
    // this.router.navigateByUrl('/add');
      return this.http.post(url, data);
      }
}
