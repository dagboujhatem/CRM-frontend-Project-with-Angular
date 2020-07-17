import { Component, OnInit } from "@angular/core";
import { FournisService } from "../../../service/fournis.service";
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";
import { ToastrService } from "ngx-toastr";
import * as jwt_decode from "jwt-decode";
import { AdminService } from "../../../service/admin.service";

@Component({
  selector: "app-list-fournisseur",
  templateUrl: "./list-fournisseur.component.html",
  styleUrls: ["./list-fournisseur.component.css"],
})
export class ListFournisseurComponent implements OnInit {
  list;
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalFournis;
  currentPage = 1;
  Search: "";
  pme;
  pmeTable;
  isAdmin = false;
  decoded = jwt_decode(this.adminservice.token);
  constructor(
    private fournis: FournisService,
    private adminservice: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.decoded.data.role === "admin") {
      this.isAdmin = !this.isAdmin;
      this.getPmeByAdmin();
    }
    this.getFournisPme(this.pme);
  }
  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    if (this.decoded.data.role === "admin") {
      this.fournis
        .getAllFournisseur(this.pme, this.pageSize, this.currentPage)
        .subscribe((res: { fournis; count }) => {
          this.list = res.fournis;
          this.totalFournis = res.count;
        });
    } else {
      this.fournis
        .getAllFournisseur(
          this.decoded.data.pme,
          this.pageSize,
          this.currentPage
        )
        .subscribe((res: { fournis; count }) => {
          this.list = res.fournis;
          this.totalFournis = res.count;
        });
    }
  }

  getPmeByAdmin() {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
      .subscribe((res: { pme; count }) => {
        this.pmeTable = res.pme;
      });
  }

  onChangePme(event) {
    this.pme = event.target.value;

    this.getFournisPme(this.pme);
  }

  getFournisPme(pme) {
    if (this.decoded.data.role === "admin") {
      this.fournis
        .getAllFournisseur(pme, this.pageSize, this.currentPage)
        .subscribe((res: { fournis; count }) => {
          this.list = res.fournis;
          this.totalFournis = res.count;
        });
    } else {
      this.fournis
        .getAllFournisseur(
          this.decoded.data.pme,
          this.pageSize,
          this.currentPage
        )
        .subscribe((res: { fournis; count }) => {
          this.list = res.fournis;
          this.totalFournis = res.count;
        });
    }
  }
  delete(id, index) {
    this.fournis.deleteOneFournisseur(id).subscribe((res) => {
      this.list.splice(index, 1);
      this.getFournisPme(this.pme);
    });
    return this.toastr.success("Fournisseur Deleted Successfully");
  }
}
