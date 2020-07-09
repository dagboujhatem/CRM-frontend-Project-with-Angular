import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { CategorieService } from '../../../service/categorie.service';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {

  constructor(private categorie: CategorieService, private adminservice: AdminService) { }
  decoded = jwt_decode(this.adminservice.token);
  categorietable;
  ngOnInit(): void {
    this.getcategorie();
  }
  /******************get categorie ***************** */
  getcategorie() {
    this.categorie.GetCategorie(this.decoded.data.pme).subscribe((res: any) => {
      this.categorietable = res;
    });
  }
  /*****************delete categorie ******* */
  delete(i, id) {
    this.categorie.DeleteCategorieById(this.decoded.data.pme, id).subscribe((res: any) => {
    });
    this.categorietable.splice(i, 1);
  }
}
