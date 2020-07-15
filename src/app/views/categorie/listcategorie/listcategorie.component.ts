import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { CategorieService } from '../../../service/categorie.service';
import { AdminService } from '../../../service/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {

  constructor(private categorie: CategorieService,    private toastr: ToastrService,private adminservice: AdminService) { }
  decoded = jwt_decode(this.adminservice.token);
  categorietable;
  Search : '';
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
      return this.toastr.success("categorie deleted successfully");
    });
    this.categorietable.splice(i, 1);
  }
}
