import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"],
})
export class ResetComponent implements OnInit {
  ResponseResetForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  resetToken: null;
  CurrentState: boolean = false;
  IsResetFormValid = true;
  token;
  validCode;
  code: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.Init();
    this.route.queryParams.subscribe((param) => {
      this.token = param["token"];
    });
  }

  onCodeSubmit(f) {
    this.code = Number(f.value.code);
    this.authService
      .ValidPasswordToken({ code: this.code }, this.token)
      .subscribe(
        (res: { message: string }) => {
          this.CurrentState = true;
          return this.toastr.success(res.message);
        },
        (err) => {
          return this.toastr.warning("Code does not match");
        }
      );
  }

  Init() {
    this.ResponseResetForm = new FormGroup({
      newPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  validatePassword() {
    const new_password = this.ResponseResetForm.value.newPassword;
    const confirm_password = this.ResponseResetForm.value.confirmPassword;

    if (confirm_password.length <= 0) {
      return true;
    }

    if (confirm_password !== new_password) {
      return true;
    }

    return false;
  }

  ResetPassword() {
    if (this.validatePassword()) {
      return this.toastr.warning("Password does not match");
    } else {
      this.authService
        .newPassword(
          { newPassword: this.ResponseResetForm.value.newPassword },
          this.token
        )
        .subscribe((res: { message: string }) => {
          return (
            this.toastr.success(res.message) &&
            this.router.navigateByUrl("/login")
          );
        });
    }
  }
}
