import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ActivityService } from '../../../../service/activity.service';
import { AdminService } from '../../../../service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {
  activitytable;
  decoded = jwt_decode(this.adminservice.token);
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalActivity;
  currentPage = 1;
  superAdminAccess = false;

  constructor(private activity: ActivityService,
    private adminservice: AdminService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    if (this.decoded.data.role === 'superAdmin') {
      this.superAdminAccess = true;
      this.getactivity();
    }
  }

  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    if (this.decoded.data.role === 'superAdmin') {
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
    if (this.decoded.data.role === 'superAdmin') {
      this.activity.GetActivity(this.pageSize, this.currentPage).subscribe((res: { activity; count }) => {
        this.activitytable = res.activity;
        this.totalActivity = res.count;
      });
    }
  }
  /*****************delete activity ******* */
  delete(i, id) {
    this.activity.DeleteActivityById(id).subscribe((res: any) => {
      return this.toastr.success('activity deleted successfully');
    });
    this.activitytable.splice(i, 1);
  }
}
