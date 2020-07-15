import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient) {}
  addUsr(j, data) {
    const url = `${this.BaseUrl}/user/${j}/register`;
    return this.http.post(url, data);
  }
  getAllUsers(data, pageSizeU: number, currentPage: number) {
    let queryParams = `?pagesize=${pageSizeU}&page=${currentPage}`;
    const url = `${this.BaseUrl}/user/${data}${queryParams}`;
    return this.http.get(url);
  }

  getUsersByPme(idPme, pageSizeU: number, currentPage: number) {
    let queryParams = `?pagesize=${pageSizeU}&page=${currentPage}`;
    const url = `${this.BaseUrl}/user/pme/${idPme}${queryParams}`;
    return this.http.get(url);
  }

  updateUser(id, data) {
    const url = `${this.BaseUrl}/user/putuser/${id}`;
    return this.http.put(url, data);
  }
  /*****************delete user by (admin) *********** */
  deleteuser(id) {
    const url = `${this.BaseUrl}/user/delete/${id}`;
    return this.http.delete(url);
  }
  getUsrById(id) {
    const url = `${this.BaseUrl}/user/${id}`;
    return this.http.get(url);
  }
  removeUser(id){
    const url = `${this.BaseUrl}/user/deleteuser/${id}`;
    return this.http.delete(url);
  }
  
}
