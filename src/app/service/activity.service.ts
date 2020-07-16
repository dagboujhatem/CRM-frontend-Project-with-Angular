import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient ) { }
    /***********add Activity *********** */
    AddActivity(data) {
      const url = `${this.BaseUrl}/activity/add`;
      return this.http.post(url, data);
    }
    /***********get all Activity ************* */
    GetActivity(pageSize: number, currentPage: number) {
      const queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
      const url = `${this.BaseUrl}/activity/get${queryParams}`;
      return this.http.get(url);
    }
    /***********get Activity By Id **************** */
    GetActivityById(id) {
      const url = `${this.BaseUrl}/activity/get/${id}`;
      return this.http.get(url);
    }
    /*************delete Activity By Id ********* */
    DeleteActivityById(id) {
      const url = `${this.BaseUrl}/activity/delete/${id}`;
      return this.http.delete(url);
    }
      /************update Activity *********** */
  UpdateactivityById(id, data) {
    const url = `${this.BaseUrl}/activity/edit/${id}`;
    return this.http.put(url, data);
  }
}
