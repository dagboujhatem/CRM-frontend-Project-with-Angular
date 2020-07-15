import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FournisService {
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient) {}

  createFournisseur(data, id) {
    const url = `${this.BaseUrl}/fournis/${id}/fourni`;
    return this.http.post(url, data);
  }

  getAllFournisseur(pageSize, currentPage) {
    let queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    const url = `${this.BaseUrl}/fournis/list-fourn${queryParams}`;
    return this.http.get(url);
  }

  getOneFournisseur(id) {
    const url = `${this.BaseUrl}/fournis/list-fourn/${id}`;
    return this.http.get(url);
  }

  deleteOneFournisseur(id) {
    const url = `${this.BaseUrl}/fournis/deletefourni/${id}`;
    return this.http.delete(url);
  }

  updateOneFournisseur(id, data) {
    const url = `${this.BaseUrl}/fournis/editfourni/${id}`;
    return this.http.put(url, data);
  }
}
