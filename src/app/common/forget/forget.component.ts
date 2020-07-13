import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../service/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-forget",
  templateUrl: "./forget.component.html",
  styleUrls: ["./forget.component.css"],
})
export class ForgetComponent implements OnInit {
  resetForm: FormGroup;
  CurrentState = false;
  doesNotMatch = false;
  validEmail = false;
  token;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      // code: new FormControl(null, Validators.required),
      // newPassword: new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(4),
      // ]),
      // confirmPassword: new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(4),
      // ]),
    });
  }
  reqReset() {
    this.auth
      .requestReset(this.resetForm.value)
      .subscribe((res: { message; token }) => {
        console.log(res);
        this.token = res.token;
        this.router.navigate(["/reset-password"], {
          queryParams: { token: this.token },
        });
        // this.validEmail = true;
      });
  }

  // onCodeSubmit() {
  //   this.auth.ValidPasswordToken(this.resetForm.value.code).subscribe((res) => {
  //     console.log(res);
  //     this.CurrentState = true;
  //   });
  // }

  // Validate() {
  //   const new_password = this.resetForm.value.newPassword;
  //   const confirm_password = this.resetForm.value.confirmPassword;

  //   if (confirm_password.length <= 0) {
  //     return null;
  //   }

  //   if (confirm_password !== new_password) {
  //     this.doesNotMatch = true;
  //     return {
  //       doesNotMatch: true,
  //     };
  //   }

  //   return null;
  // }

  // ResetPassword() {
  //   this.Validate();
  //   if (this.resetForm.valid && this.doesNotMatch == false) {
  //     this.auth
  //       .newPassword(this.resetForm.value.confirmPassword)
  //       .subscribe((res) => {
  //         console.log(res);
  //       });
  //   }
  // }
}
