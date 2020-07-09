import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient) { }
  addUsr(j,data){
    const url=`${this.BaseUrl}/user/${j}/register`;
    return this.http.post(url,data);
  }
  getAllUsr(data){
    const url=`${this.BaseUrl}/user/`;
    return this.http.get(url,data);
  }
  updateUser(id, data) {
    const url = `${this.BaseUrl}/user/putuser/${id}`;
    return this.http.put(url, data);
  }
  getUsrById(id) {
    const url = `${this.BaseUrl}/user/${id}`;
    return this.http.get(url);
  }
  
}
