import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
BaseUrl = environment.baseuri;
  constructor(private http: HttpClient) { }
  // connection sur la base de donnée et register societé
  Register(data) {
    const url = `${this.BaseUrl}/pme/register`;
    return this.http.post(url, data);
  }
}
