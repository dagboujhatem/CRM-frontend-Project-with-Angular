import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient) {}
  /*******************add produit ************** */
  addProduit(id, data) {
    const url = `${this.BaseUrl}/stock/${id}/create`;
    return this.http.post(url, data);
  }
  notifRupture(id, prodId, mail) {
    const url = `${this.BaseUrl}/${id}/notif-rupture/${prodId}`;
    return this.http.post(url, mail);
  }
  /************upload file ************* */
  upload(data, id) {
    const url = `${this.BaseUrl}/uploadimg/${id}`;
    return this.http.put(url, data);
  }
  /**********get all produit ********** */
  Getallproduit(id: string, pageSize: number, currentPage: number) {
    const queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    const url = `${this.BaseUrl}/stock/${id}${queryParams}`;
    return this.http.get(url);
  }
  /****************get produit by id **** */
  GetproduitById(id, idprod) {
    const url = `${this.BaseUrl}/stock/${id}/${idprod}`;
    return this.http.get(url);
  }
  /*************update produit by id ******* */
  UpdateproduitById(id, idprod, data) {
    const url = `${this.BaseUrl}/stock/${id}/edit/${idprod}`;
    return this.http.put(url, data);
  }
  /************ delete produit By Id *********/
  DeleteProduitById(id, prodId) {
    const url = `${this.BaseUrl}/stock/${id}/delete/${prodId}`;
    return this.http.delete(url);
  }
  /*************get produit by pme ******** */
  getproduitbypme(idpme) {
    // let queryParams = `?pagesize=${pageSizeU}&page=${currentPage}`;
    const url = `${this.BaseUrl}/stock/pme/${idpme}`;
    return this.http.get(url);
  }
}
