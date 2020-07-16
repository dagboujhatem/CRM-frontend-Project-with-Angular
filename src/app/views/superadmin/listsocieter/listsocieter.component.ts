import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../../service/admin.service";
import * as jwt_decode from "jwt-decode";
import { ToastrService } from "ngx-toastr";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-listsocieter",
  templateUrl: "./listsocieter.component.html",
  styleUrls: ["./listsocieter.component.css"],
})
export class ListsocieterComponent implements OnInit {
  table;
  decoded = jwt_decode(this.adminservice.token);
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalPme;
  currentPage = 1;
  superAdminAccess = false;
  Search:""

  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getallpme();
    console.log(this.decoded);
    
    if (this.decoded.data.role === "superAdmin") {
      this.superAdminAccess = true;
    }
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    if (this.decoded.data.role === "superAdmin") {
      this.adminservice
        .getall(this.pageSize, this.currentPage)
        .subscribe((res: { pme; count }) => {
          this.table = res.pme;
          this.totalPme = res.count;
        });
    } else if (this.decoded.data.role === "admin") {
      this.adminservice
        .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
        .subscribe((res: { pme; count }) => {
          this.table = res.pme;
          this.totalPme = res.count;
        });
    }
  }
  // ************* get all pme for superAdmin*******//
  getallpme() {
    if (this.decoded.data.role === "superAdmin") {
      this.adminservice
        .getall(this.pageSize, this.currentPage)
        .subscribe((res: { pme; count }) => {
          this.table = res.pme;
          this.totalPme = res.count;
        });
    } else if (this.decoded.data.role === "admin") {
      this.adminservice
        .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
        .subscribe((res: { pme; count }) => {
          this.table = res.pme;
          this.totalPme = res.count;
        });
    }
  }
  /*****************delete pme for supre admin******** */
  delete(i, id) {
    if (this.decoded.data.role === "superAdmin") {
      this.adminservice.deletepme(id).subscribe(
        (res: any) => {
          this.getallpme();
          this.table.splice(i, 1);
          return this.toastr.success("Pme Deleted Successfully");
        },
        (err) => {
          return this.toastr.warning(err.message);
        }
      );
    }
  }
}
