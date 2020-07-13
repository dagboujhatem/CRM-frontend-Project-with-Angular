import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserServiceService } from "../../../service/user-service.service";
import { AdminService } from "../../../service/admin.service";
import * as jwt_decode from "jwt-decode";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"],
})
export class UpdateUserComponent implements OnInit {
  Id;
  table;
  pageSize = 1000;

  currentPage = 1;
  pme: "";
  decoded = jwt_decode(this.adminservice.token);
  updateUserForm: FormGroup;
  constructor(
    private userservice: UserServiceService,
    private adminservice: AdminService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Id = this.activateroute.snapshot.paramMap.get("id");
    this.getUserById();
    this.updateUserForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      pme : new FormControl("")
    });
    this.getpme();
  }
  getUserById() {
    this.userservice.getUsrById(this.Id).subscribe(
      (res) => {
        this.updateUserForm.patchValue(res);
      },
      (errors) => console.log(errors)
    );
  }
  getpme() {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
      .subscribe((res: any) => {
        this.table = res.pme;
        console.log(this.table);
      });
  }
  updateUserById() {
    this.userservice
      .updateUser(this.Id, this.updateUserForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
