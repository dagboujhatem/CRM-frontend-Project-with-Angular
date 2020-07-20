import { Component, OnInit } from "@angular/core";
import * as jwt_decode from "jwt-decode";
import { ActivityService } from "../../../../service/activity.service";
import { AdminService } from "../../../../service/admin.service";
import { ToastrService } from "ngx-toastr";
import { PageEvent } from "@angular/material/paginator";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-list-activity",
  templateUrl: "./list-activity.component.html",
  styleUrls: ["./list-activity.component.css"],
})
export class ListActivityComponent implements OnInit {
  activitytable;
  decoded = jwt_decode(this.adminservice.token);
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalActivity;
  currentPage = 1;
  superAdminAccess = false;
  Search: "";
  isDeleted = false;

  constructor(
    private activity: ActivityService,
    private adminservice: AdminService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.decoded.data.role === "superAdmin") {
      this.superAdminAccess = true;
      this.getactivity();
    }
  }

  openDialog(content) {
    this.isDeleted = !this.isDeleted;
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  /*****************delete activity ******* */
  acceptDelete(i, id) {
    this.activity.DeleteActivityById(id).subscribe(() => {
      this.activitytable.splice(i, 1);
      return this.toastr.success("activity deleted successfully");
    });
    this.modalService.dismissAll();
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    if (this.decoded.data.role === "superAdmin") {
      this.activity
        .GetActivity(this.pageSize, this.currentPage)
        .subscribe((res: { activity; count }) => {
          this.activitytable = res.activity;
          this.totalActivity = res.count;
        });
    }
  }
  /******************get activity ***************** */
  getactivity() {
    if (this.decoded.data.role === "superAdmin") {
      this.activity
        .GetActivity(this.pageSize, this.currentPage)
        .subscribe((res: { activity; count }) => {
          this.activitytable = res.activity;
          this.totalActivity = res.count;
        });
    }
  }
}
