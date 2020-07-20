import { Component, OnInit } from "@angular/core";
import * as jwt_decode from "jwt-decode";
import { AdminService } from "../../../service/admin.service";
import { UserServiceService } from "../../../service/user-service.service";
import { PageEvent } from "@angular/material/paginator";
import { ToastrService } from "ngx-toastr";
import {
  NgbActiveModal,
  NgbModal,
  ModalDismissReasons,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUSERComponent implements OnInit {
  table;
  pageSize = 1000;
  decoded = jwt_decode(this.adminservice.token);
  pageSizeU = 5;
  pageSizeOptions = [2, 5, 10];
  totalUsers;
  currentPage = 1;
  pme;
  pmeTable;
  profils;

  isDeleted = false;
  fileToUpload: File = null;
  Search: "";

  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService,
    private usersrvice: UserServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.decoded.data.role === "superAdmin") {
      this.getAllPme();
    } else if (this.decoded.data.role === "admin") {
      this.getPmeByAdmin();
    }
  }

  openDialog(content) {
    this.isDeleted = !this.isDeleted;
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  acceptDelete(i, id) {
    if (
      this.decoded.data.role === "admin" ||
      this.decoded.data.role === "superAdmin"
    ) {
      this.usersrvice.deleteuser(id).subscribe(() => {
        this.getUsersByPme();
        this.table.splice(i, 1);
        return this.toastr.success("User Deleted succesfully");
      });
    }
    this.modalService.dismissAll();
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSizeU = pageData.pageSize;

    this.usersrvice
      .getUsersByPme(this.pme, this.pageSizeU, this.currentPage)
      .subscribe((res: { users; count }) => {
        this.table = res.users;
        this.totalUsers = res.count;
      });
  }

  onChangePme(event) {
    this.pme = event.target.value;

    this.getUsersByPme();
  }

  getPmeByAdmin() {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
      .subscribe((res: { pme; count }) => {
        this.pmeTable = res.pme;
      });
  }

  getAllPme() {
    this.adminservice
      .getall(this.pageSize, this.currentPage)
      .subscribe((res: { pme; count }) => {
        this.pmeTable = res.pme;
      });
  }

  getUsersByPme() {
    if (this.pme) {
      this.usersrvice
        .getUsersByPme(this.pme, this.pageSizeU, this.currentPage)
        .subscribe((res: { users; count }) => {
          this.table = res.users;

          this.totalUsers = res.count;
        });
    }
  }

  /*****************delete user for admin******** */
  // delete(i, id) {
  //   if (
  //     this.decoded.data.role === "admin" ||
  //     this.decoded.data.role === "superAdmin"
  //   ) {
  //     this.usersrvice.deleteuser(id).subscribe(() => {
  //       this.getUsersByPme();
  //       this.table.splice(i, 1);
  //       return this.toastr.success("User Deleted succesfully");
  //     });
  //   }
  // }
}
