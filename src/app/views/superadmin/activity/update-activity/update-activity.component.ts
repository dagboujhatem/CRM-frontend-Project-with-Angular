import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivityService } from '../../../../service/activity.service';
import { AdminService } from '../../../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
// import * as jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {

  constructor(private activity: ActivityService, private adminservice: AdminService,
    private toastr: ToastrService, private activateroute: ActivatedRoute,  private router: Router) { }
  Id = this.activateroute.snapshot.paramMap.get('id');
  // decoded = jwt_decode(this.adminservice.token);
  updateactivityForm: FormGroup;
  ngOnInit(): void {
    this.getactivityById();
    this.updateactivityForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
 /************get activity By Id ********** */
 getactivityById() {
  this.activity.GetActivityById( this.Id).subscribe((res: any) => {
    this.updateactivityForm = new FormGroup({
      name: new FormControl(res.name, [Validators.required])
    });
  });
}
  /************uUpdate activity By Id ************** */
  Updateactivity() {
    if (this.updateactivityForm.valid) {
      this.activity.UpdateactivityById( this.Id , this.updateactivityForm.value).subscribe();
      return this.toastr.success('activity updated with seccefully') && this.router.navigateByUrl('/home/superadmin/activity/listactivity');
    } else {
      return this.toastr.warning('Update form invalid');
    }
  }

}
