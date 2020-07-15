import { Component, OnInit } from "@angular/core";
import * as jwt_decode from "jwt-decode";
import { AdminService } from "../../../service/admin.service";
import { UserServiceService } from "../../../service/user-service.service";
import { PageEvent } from "@angular/material/paginator";
import { CheckpipePipe } from '../../../pipes/checkpipe.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUSERComponent implements OnInit {
  table;
  user;
  pageSize = 1000;
  decoded = jwt_decode(this.adminservice.token);
  pageSizeU = 2;
  pageSizeOptions = [2, 5, 10];
  totalUsers;
  currentPage = 1;
  pme;
  pmeTable;
  profils;
  j ;
  fileToUpload :File= null;
  Search:"";
  boxes = ['ingenieur', 'technicen'];
  selectedCheckboxes = [];

  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService,
    private usersrvice: UserServiceService
  ) {}

  ngOnInit(): void {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
      .subscribe((res: { pme; count }) => {
        this.pmeTable = res.pme;
      
      });
    if (this.decoded.data.role === "superAdmin") this.getallUser();
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSizeU = pageData.pageSize;
    if (this.decoded.data.role === "superAdmin") {
      this.usersrvice
        .getAllUsers(this.decoded.data._id, this.pageSizeU, this.currentPage)
        .subscribe((res: { users: []; count: number }) => {
          this.table = res.users;
          this.totalUsers = res.count;
          this.user = res.users
        
        });
    } else if (this.decoded.data.role === "admin") {
      this.usersrvice
        .getUsersByPme(this.pme, this.pageSizeU, this.currentPage)
        .subscribe((res: { users; count }) => {
          this.table = res.users;
          this.totalUsers = res.count;
        });
    }
  }

  getallUser() {
    this.usersrvice
      .getAllUsers(this.decoded.data._id, this.pageSizeU, this.currentPage)
      .subscribe((res: { users; count }) => {
        this.table = res.users;
        this.totalUsers = res.count;
      });
  }

  onChangePme(event) {
    this.pme = event.target.value;

    this.getUsersByPme();
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
  filterCheck(checkbox) {

    if (!this.selectedCheckboxes.includes(checkbox)) {
      this.selectedCheckboxes.push(checkbox);
      console.log(this.selectedCheckboxes);
    } else {
      const i = this.selectedCheckboxes.indexOf(checkbox);
      this.selectedCheckboxes.splice(i, 1);
      console.log(this.selectedCheckboxes);
    }
    const p = new CheckpipePipe();
    this.table = p.transform(this.user , this.selectedCheckboxes);
  }
  delete(i){
    let j=this.table[i]._id
    this.usersrvice.removeUser(j).subscribe((res:any) =>{
     
      // console.log(res);
      this.table.splice(i,1);
      return this.toastr.success("user deleted successfully")
    })
  }
  
}
