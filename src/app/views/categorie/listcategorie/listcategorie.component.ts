import { Component, OnInit } from "@angular/core";
import * as jwt_decode from "jwt-decode";
import { CategorieService } from "../../../service/categorie.service";
import { AdminService } from "../../../service/admin.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-listcategorie",
  templateUrl: "./listcategorie.component.html",
  styleUrls: ["./listcategorie.component.css"],
})
export class ListcategorieComponent implements OnInit {
  constructor(
    private categorie: CategorieService,
    private toastr: ToastrService,
    private adminservice: AdminService
  ) {}
  decoded = jwt_decode(this.adminservice.token);
  categorietable;
  Search: "";
  pmeTable;
  pageSizeA = 1000;
  currentPage = 1;
  pme;
  isAdmin = false;

  ngOnInit(): void {
    if (this.decoded.data.role === "admin") {
      this.getPmeByAdmin();
      this.isAdmin = !this.isAdmin;
    }
    this.getcategorie(this.pme);
  }

  getPmeByAdmin() {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSizeA, this.currentPage)
      .subscribe((res: { pme; count }) => {
        this.pmeTable = res.pme;
      });
  }

  onChangePme(event) {
    this.pme = event.target.value;

    this.getcategorie(this.pme);
  }

  /******************get categorie ***************** */
  getcategorie(pme) {
    if (this.decoded.data.role === "admin") {
      this.categorie.GetCategorie(pme).subscribe((res) => {
        this.categorietable = res;
      });
    } else {
      this.categorie
        .GetCategorie(this.decoded.data.pme)
        .subscribe((res: any) => {
          this.categorietable = res;
        });
    }
  }
  /*****************delete categorie ******* */
  delete(i, id) {
    this.categorie
      .DeleteCategorieById(this.decoded.data.pme, id)
      .subscribe((res: any) => {
        return this.toastr.success("categorie deleted successfully");
      });
    this.categorietable.splice(i, 1);
  }
}
