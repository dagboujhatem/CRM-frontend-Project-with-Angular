import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';
import { UserServiceService } from '../../../service/user-service.service';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUSERComponent implements OnInit {
  table;
  user;
  pageSize = 1000;
  decoded = jwt_decode(this.adminservice.token);
  pageSizeU = 5;
  pageSizeOptions = [2, 5, 10];
  totalUsers;
  currentPage = 1;
  pme;
  pmeTable;
  profils;

  j;
  fileToUpload: File = null;
  Search: '';
  boxes = ['ingenieur', 'technicen'];
  selectedCheckboxes = [];


  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService,
    private usersrvice: UserServiceService
  ) {}

  ngOnInit(): void {
    if (this.decoded.data.role === 'superAdmin') { this.getAllPme(); }
    else if (this.decoded.data.role === 'admin') { this.getPmeByAdmin(); }
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
  delete(i, id) {
    if (
      this.decoded.data.role === 'admin' ||
      this.decoded.data.role === 'superAdmin'
    ) {
      this.usersrvice.deleteuser(id).subscribe((res: any) => {
        this.getUsersByPme();
        this.table.splice(i, 1);
      });
    }
  }

}
