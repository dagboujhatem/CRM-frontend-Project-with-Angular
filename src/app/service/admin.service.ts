import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}
  BaseUrl = environment.baseuri;
  token = localStorage.getItem("token");
  // *********get all pme for super admin******** */
  getall(pageSize: number, currentPage: number) {
    // tslint:disable-next-line: no-shadowed-variable
    let queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    const url = `${this.BaseUrl}/pme${queryParams}`;
    return this.http.get(url);
  }
  /**************get pme by idadmin ************ */
  getPmeByAdminId(idadmin, pageSize: number, currentPage: number) {
    let queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    const url = `${this.BaseUrl}/pme/list-pme/${idadmin}${queryParams}`;
    return this.http.get(url);
  }
  /*****************delete pme for supre admin *********** */
  deletepme(id) {
    const url = `${this.BaseUrl}/pme/delete/${id}`;
    return this.http.delete(url);
  }
  /**************Add societé (admin)*********** */
  addsociete(data) {
    const url = `${this.BaseUrl}/pme/create-pme`;
    return this.http.post(url, data);
  }
  /********************get societé By Id************* */
  getsocieteById(idpme) {
    const url = `${this.BaseUrl}/pme/${idpme}`;
    return this.http.get(url);
  }
  /******************update societé*************** */
  updatesociete(id, data) {
    const url = `${this.BaseUrl}/pme/edit/${id}`;
    return this.http.put(url, data);
  }
}
