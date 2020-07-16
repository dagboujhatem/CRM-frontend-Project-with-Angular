import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AdminService } from "../../../service/admin.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-settingsuperadmin",
  templateUrl: "./settingsuperadmin.component.html",
  styleUrls: ["./settingsuperadmin.component.css"],
})
export class SettingsuperadminComponent implements OnInit {
  constructor(
    private adminservice: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  superadminform: FormGroup;
  decoded = jwt_decode(this.adminservice.token);
  statutisActivSuperAdmin;
  statutisActivAdmin;
  ngOnInit(): void {
    this.superadminform = new FormGroup({
      isActivSuperAdmin: new FormControl(),
      isActivAdmin: new FormControl(),
    });
    this.adminservice.getsetting().subscribe((res: any) => {
      this.superadminform.patchValue(res);
    });
  }
  toggleSuperAdmin() {
    this.statutisActivSuperAdmin = !this.statutisActivSuperAdmin;
  }
  toggleAdmin() {
    this.statutisActivAdmin = !this.statutisActivAdmin;
  }
  update() {
    this.adminservice
      .updatesuperadminnotif(this.superadminform.value)
      .subscribe((res: any) => {
        console.log(res);
      });
    this.router.navigateByUrl("/home");

    return this.toastr.success("activation-email-notif was updated");
  }
}
