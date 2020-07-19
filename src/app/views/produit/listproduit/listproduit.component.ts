import { Component, OnInit } from "@angular/core";
import { ProduitService } from "../../../service/produit.service";
import * as jwt_decode from "jwt-decode";
import { AdminService } from "../../../service/admin.service";
import { PageEvent } from "@angular/material/paginator";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-listproduit",
  templateUrl: "./listproduit.component.html",
  styleUrls: ["./listproduit.component.css"],
})
export class ListproduitComponent implements OnInit {
  table;
  decoded = jwt_decode(this.adminservice.token);
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalProd;
  currentPage = 1;
  Search: "";
  pmeTable;
  pme;
  totalpme;
  pageSizeA = 1000;
  isAdmin = false;

  constructor(
    private produit: ProduitService,
    private adminservice: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.decoded.data.role === "admin") {
      this.getPmeByAdmin();
      this.isAdmin = !this.isAdmin;
    }
    this.getproduit(this.pme);
    // this.getPmeByAdmin();
  }

  getPmeByAdmin() {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSizeA, this.currentPage)
      .subscribe((res: { pme; count }) => {
        this.pmeTable = res.pme;
      });
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    if (this.decoded.data.role === "admin") {
      this.produit
        .Getallproduit(this.pme, this.pageSize, this.currentPage)
        .subscribe((res: { stocks; count }) => {
          this.table = res.stocks;
          this.totalProd = res.count;
        });
    } else {
      this.produit
        .Getallproduit(this.decoded.data.pme, this.pageSize, this.currentPage)
        .subscribe((res: { stocks; count }) => {
          this.table = res.stocks;
          this.totalProd = res.count;
        });
    }
  }

  onChangePme(event) {
    this.pme = event.target.value;

    this.getproduit(this.pme);
  }
  /*********************get produit ************ */
  getproduit(pme) {
    if (this.decoded.data.role === "admin") {
      this.produit
        .Getallproduit(pme, this.pageSize, this.currentPage)
        .subscribe((res: { stocks; count }) => {
          this.table = res.stocks;
          this.totalProd = res.count;
        });
    } else {
      this.produit
        .Getallproduit(this.decoded.data.pme, this.pageSize, this.currentPage)
        .subscribe((res: { stocks; count }) => {
          this.table = res.stocks;
          this.totalProd = res.count;
        });
    }
  }
  /*******************delete produit ******************* */
  delete(i, id) {
    this.produit
      .DeleteProduitById(this.decoded.data.pme, id)
      .subscribe((res: any) => {
        this.table.splice(i, 1);
        this.getproduit(this.pme);
        return this.toastr.success("Produit Deleted with succesfully");
      });
  }
}
