import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../../service/admin.service';
import { ActivityService } from '../../../../service/activity.service';
import { Router } from '@angular/router';
import { ToastrService, ToastRef } from 'ngx-toastr';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  constructor(private activity: ActivityService, private adminservice: AdminService,
    private toastr: ToastrService, private router: Router) { }
  // decoded = jwt_decode(this.adminservice.token);

  activityForm: FormGroup;

  ngOnInit(): void {
    this.activityForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
  /****************add activity ************** */
  AddActivity() {
    if (!this.activityForm.valid) {
      return this.toastr.warning('activity could not be added');
    }
    this.activity.AddActivity(this.activityForm.value).subscribe(() => {
      this.router.navigateByUrl('/home/superadmin/activity/listactivity');
      this.toastr.success('activity added successfully');
    });
  }
}
