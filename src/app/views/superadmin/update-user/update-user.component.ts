import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserServiceService } from "../../../service/user-service.service";
import { AdminService } from "../../../service/admin.service";
import * as jwt_decode from "jwt-decode";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"],
})
export class UpdateUserComponent implements OnInit {
  hide =true ;
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
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("id");
    this.getUserById();
    this.updateUserForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      // password: new FormControl("", Validators.required),
      pme: new FormControl("", Validators.required),
    });
    if (this.decoded.data.role === "superAdmin") this.getAllPme();
    else if (this.decoded.data.role === "admin") this.getPmeByAdmin();
  }
  getUserById() {
    this.userservice.getUsrById(this.Id).subscribe(
      (res) => {
        this.updateUserForm.patchValue(res);
      },
      (errors) => console.log(errors)
    );
  }
  getPmeByAdmin() {
    this.adminservice
      .getPmeByAdminId(this.decoded.data._id, this.pageSize, this.currentPage)
      .subscribe((res: any) => {
        this.table = res.pme;
      });
  }

  getAllPme() {
    this.adminservice
      .getall(this.pageSize, this.currentPage)
      .subscribe((res: any) => {
        this.table = res.pme;
      });
  }

  updateUserById() {
    if (!this.updateUserForm.valid)
      return this.toastr.warning("Operation not successfull");
    this.userservice
      .updateUser(this.Id, this.updateUserForm.value)
      .subscribe(() => {
        this.router.navigate(["../../listuser"], { relativeTo: this.route });
        return this.toastr.success("User Updated Successfully");
      });
  }
}
