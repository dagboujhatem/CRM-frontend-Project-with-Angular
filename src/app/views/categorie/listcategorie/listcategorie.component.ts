import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { CategorieService } from '../../../service/categorie.service';
import { AdminService } from '../../../service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css'],
})
export class ListcategorieComponent implements OnInit {
  decoded = jwt_decode(this.adminservice.token);
  categorietable;
  Search: '';
  pmeTable;
  pageSize = 2;
  totalCat;
  pageSizeOptions = [2, 5, 10];
  currentPage = 1;
  pageSizeA = 1000;
  pme;
  isAdmin = false;
  isDeleted = false;

  constructor(
    private categorie: CategorieService,
    private toastr: ToastrService,
    private adminservice: AdminService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.decoded.data.role === 'admin') {
      this.getPmeByAdmin();
      this.isAdmin = !this.isAdmin;
    }
    this.getcategorie(this.pme);
  }

  openDialog(content) {
    this.isDeleted = !this.isDeleted;
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  acceptDelete(i, id) {
    this.categorie
      .DeleteCategorieById(this.decoded.data.pme || this.pme, id)
      .subscribe(() => {
        this.categorietable.splice(i, 1);
        return this.toastr.success('categorie deleted successfully');
      });
    this.modalService.dismissAll();
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
  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    if (this.decoded.data.role === 'admin') {
      this.categorie
        .GetCategorie(this.pme, this.pageSize, this.currentPage)
        .subscribe((res: { stocks; count }) => {
          this.categorietable = res.stocks;
          this.totalCat = res.count;
        });
    } else {
      this.categorie
        .GetCategorie(this.decoded.data.pme, this.pageSize, this.currentPage)
        .subscribe((res: { stocks; count }) => {
          this.categorietable = res.stocks;
          this.totalCat = res.count;
        });
    }
  }

  /******************get categorie ***************** */
  getcategorie(pme) {
    if (this.decoded.data.role === 'admin') {
      this.categorie.GetCategorie(pme, this.pageSize, this.currentPage).subscribe((res: { categories; count }) => {
        this.categorietable = res.categories;
        this.totalCat = res.count;
      });
    } else {
      this.categorie
        .GetCategorie(this.decoded.data.pme, this.pageSize, this.currentPage)
        .subscribe((res: { categories; count }) => {
          this.categorietable = res.categories;
          this.totalCat = res.count;
        });
    }
  }
  /*****************delete categorie ******* */
  // delete(i, id) {
  //   this.categorie
  //     .DeleteCategorieById(this.decoded.data.pme, id)
  //     .subscribe((res: any) => {
  //       return this.toastr.success("categorie deleted successfully");
  //     });
  //   this.categorietable.splice(i, 1);
  // }
}
