import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  [x: string]: any;
  BaseUrl = environment.baseuri;
  id: string;

  isLogged = new BehaviorSubject<boolean>(this.logged());

  isAdmin = new BehaviorSubject<boolean>(this.admin());

  isUser = new BehaviorSubject<boolean>(this.user());

  isSuperAdmin = new BehaviorSubject<boolean>(this.superAdmin());

  private admin(): boolean {
    this.role = this.getRole();
    if (this.role == "") return false;
    else if (this.role === "admin") return true;
  }
  private user(): boolean {
    this.role = this.getRole();
    if (this.role == "") return false;
    else if (this.role === "user") return true;
  }
  private superAdmin(): boolean {
    this.role = this.getRole();
    if (this.role == "") return false;
    else if (this.role === "superAdmin") return true;
  }
  private logged() {
    return !!localStorage.getItem("token");
  }

  constructor(private http: HttpClient, private router: Router) {}
  // connection sur la base de donnée et register societé
  Register(data) {
    const url = `${this.BaseUrl}/admin/register`;
    return this.http.post(url, data);
  }
  // connection sur la base de donnée et login societé

  signin(data) {
    const url = `${this.BaseUrl}/admin/login`;

    return this.http.post(url, data);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogged;
  }

  loggedAdmin(): Observable<boolean> {
    return this.isAdmin;
  }

  loggedUser(): Observable<boolean> {
    return this.isUser;
  }

  loggedSuperAdmin(): Observable<boolean> {
    return this.isSuperAdmin;
  }

  requestReset(body) {
    return this.http.post(`${this.BaseUrl}/admin/req-reset-password`, body);
  }
  newPassword(body, token) {
    const tokenQuery = `?token=${token}`;
    return this.http.post(
      `${this.BaseUrl}/admin/new-password${tokenQuery}`,
      body
    );
  }

  ValidPasswordToken(body, token) {
    const tokenQuery = `?token=${token}`;
    return this.http.post(
      `${this.BaseUrl}/admin/valid-password-token${tokenQuery}`,
      body
    );
  }

  getUserId() {
    const token = this.getToken();
    return (this.id = jwt_decode(token).data._id);
  }

  getRole() {
    const token = this.getToken();
    if (token != "") return (this.role = jwt_decode(token).data.role);
    else return "";
  }

  getToken() {
    const token = localStorage.getItem("token");
    if (token != undefined && token != null) return token;
    else return "";
  }
}
