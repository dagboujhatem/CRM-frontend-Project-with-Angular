import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../../../service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-settingsuperadmin',
  templateUrl: './settingsuperadmin.component.html',
  styleUrls: ['./settingsuperadmin.component.css']
})
export class SettingsuperadminComponent implements OnInit {

  constructor(private adminservice: AdminService,
    private router: Router,
    private toastr: ToastrService) { }
  superadminform: FormGroup;
  decoded = jwt_decode(this.adminservice.token);
  statutisActivSuperAdmin;
  statutisActivAdmin;
  ngOnInit(): void {
    this.adminservice.getsetting().subscribe((res: any) => {
    this.statutisActivSuperAdmin = res.isActivSuperAdmin;
    this.statutisActivAdmin = res.isActivAdmin;
    });
    this.superadminform = new FormGroup({
      isActivSuperAdmin: new FormControl(),
      isActivAdmin: new FormControl()
    });
  }
  toggleIsAwesome() {
    this.statutisActivSuperAdmin = !this.statutisActivSuperAdmin;
    this.superadminform.controls.isActivSuperAdmin.setValue(this.statutisActivSuperAdmin);
  }
  toggleIsAwesome1() {
    this.statutisActivAdmin = !this.statutisActivAdmin;
    this.superadminform.controls.isActivAdmin.setValue(this.statutisActivAdmin);
  }
  update() {
    this.adminservice.updatesuperadminnotif(this.superadminform.value).subscribe((res: any) => {
    });
    return this.toastr.success('activation-email-notif was updated') && this.router.navigateByUrl('/home');
  }

}
