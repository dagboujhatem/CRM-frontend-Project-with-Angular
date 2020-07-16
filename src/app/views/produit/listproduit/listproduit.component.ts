import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../service/produit.service';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css'],
})
export class ListproduitComponent implements OnInit {
  table;
  decoded = jwt_decode(this.adminservice.token);
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalProd;
  currentPage = 1;
  Search : "";
  constructor(
    private produit: ProduitService,
    private adminservice: AdminService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getproduit();
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    this.produit
      .Getallproduit(this.decoded.data.pme, this.pageSize, this.currentPage)
      .subscribe((res: { stocks; count }) => {
        this.table = res.stocks;
        this.totalProd = res.count;
      });
  }
  /*********************get produit ************ */
  getproduit() {
    this.produit
      .Getallproduit(this.decoded.data.pme, this.pageSize, this.currentPage)
      .subscribe((res: { stocks; count }) => {
        this.table = res.stocks;
        this.totalProd = res.count;
      });
  }
  /*******************delete produit ******************* */
  delete(i, id) {
    this.produit
      .DeleteProduitById(this.decoded.data.pme, id)
      .subscribe((res: any) => {
        this.table.splice(i, 1);
        this.getproduit();
        return this.toastr.success('Produit Deleted with succesfully');
      });
  }
}
