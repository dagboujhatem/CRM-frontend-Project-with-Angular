import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  BaseUrl = environment.baseuri;

  constructor(private http: HttpClient ) { }
  /***********add categorie *********** */
  ajoutCategorie(data, id) {
    const url = `${this.BaseUrl}/categorie/add/${id}`;
    return this.http.post(url, data);
  }
  /***********get all categories ************* */
  GetCategorie(id) {
    const url = `${this.BaseUrl}/categorie/get/${id}`;
    return this.http.get(url);
  }
  /***********get categorie By Id **************** */
  GetCategorieById(id, idcat) {
    const url = `${this.BaseUrl}/categorie/${id}/get/${idcat}`;
    return this.http.get(url);
  }
  /*************delete categorie By Id ********* */
  DeleteCategorieById(id, idcat) {
    const url = `${this.BaseUrl}/categorie/${id}/delete/${idcat}`;
    return this.http.delete(url);
  }
  /************update categorie *********** */
  UpdatecategorieById(id, idcat, data) {
    const url = `${this.BaseUrl}/categorie/${id}/update/${idcat}`;
    return this.http.put(url,data)
  }

}
