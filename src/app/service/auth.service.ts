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
  constructor( private http : HttpClient) { }
  // connection sur la base de donnée et register societé
  Register(data) {
    const url = `${this.BaseUrl}/pme/register`;
    return this.http.post(url, data);
  }
  // connection sur la base de donnée et login societé

  signin(data) {
    const url = `${this.BaseUrl}/pme/login`;
    console.log(data);
    return this.http.post(url, data);
  }
}

