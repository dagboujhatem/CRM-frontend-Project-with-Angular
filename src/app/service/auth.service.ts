import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  BaseUrl = environment.baseuri;
  id: string;

  constructor(private http: HttpClient, private router: Router) {}
  // connection sur la base de donnée et register societé
  Register(data) {
    const url = `${this.BaseUrl}/admin/register`;
    this.router.navigateByUrl("/login")
    return this.http.post(url, data);
  }
  // connection sur la base de donnée et login societé

  signin(data) {
    const url = `${this.BaseUrl}/admin/login`;
    console.log(data);
    return this.http.post(url, data);
  }
  requestReset(body) {
    return this.http.post(`${this.BaseUrl}/admin/req-reset-password`, body);
  }
  newPassword(body) {
    return this.http.post(`${this.BaseUrl}/admin/new-password`, body);
  }

  ValidPasswordToken(body) {
    return this.http.post(`${this.BaseUrl}/admin/valid-password-token`, body);
  }
  

  getUserId() {
    const token = this.getToken();
    return (this.id = jwt_decode(token).data._id);
  }
  getToken() {
    const token = localStorage.getItem("token");
    if (token != undefined && token != null) return token;
    else return "";
  }
}
