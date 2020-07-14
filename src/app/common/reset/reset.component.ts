import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"],
})
export class ResetComponent implements OnInit {
  // codeForm: FormGroup;
  ResponseResetForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  resetToken: null;
  CurrentState: boolean = false;
  IsResetFormValid = true;
  token;
  validCode;
  code: number;
  doesNotMatch = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.CurrentState = 'Wait';
    // this.route.params.subscribe(params => {
    //   this.resetToken = params.token;
    //   console.log(this.resetToken);
    //   this.VerifyToken();
    // });
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.resetToken = params.token;
    //   console.log(this.resetToken);
    //   this.VerifyToken();
    // });
    this.Init();
    this.route.queryParams.subscribe((param) => {
      this.token = param["token"];
    });
  }

  // VerifyToken() {
  //   this.authService.ValidPasswordToken({ resetToken: this.resetToken }).subscribe(
  //     data => {
  //       this.CurrentState = 'Verified';
  //     },
  //     err => {
  //       this.CurrentState = 'NotVerified';
  //     }
  //   );
  // }

  // verifCode() {
  //   this.codeForm = new FormGroup({

  //   });
  // }

  onCodeSubmit(f) {
    this.code = Number(f.value.code);
    this.authService
      .ValidPasswordToken({ code: this.code }, this.token)
      .subscribe((res) => {
        console.log(res);
        this.CurrentState = true;
        console.log(this.CurrentState);
      });
  }

  Init() {
    this.ResponseResetForm = new FormGroup({
      // resettoken: new FormControl( this.resetToken),
      // code: new FormControl(null, Validators.required),
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

  Validate() {
    const new_password = this.ResponseResetForm.value.newPassword;
    const confirm_password = this.ResponseResetForm.value.confirmPassword;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      this.doesNotMatch = true;
      return {
        doesNotMatch: true,
      };
    }

    return null;
  }

  ResetPassword() {
    this.Validate();
    if (this.ResponseResetForm.valid && this.doesNotMatch == false) {
      this.authService
        .newPassword(
          { newPassword: this.ResponseResetForm.value.newPassword },
          this.token
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  // ResetPassword(form) {
  //   console.log(form.get('confirmPassword'));
  //   if (form.valid) {
  //     this.IsResetFormValid = true;
  //     this.authService.newPassword(this.ResponseResetForm.value).subscribe(
  //      ( data:any )=> {
  //         this.ResponseResetForm.reset();
  //         this.successMessage = data.message;
  //         setTimeout(() => {
  //           this.successMessage = null;
  //           this.router.navigate(['login']);
  //         }, 3000);
  //       },
  //       err => {
  //         if (err.error.message) {
  //           this.errorMessage = err.error.message;
  //         }
  //       }
  //     );
  //   } else { this.IsResetFormValid = false; }
  // }
}
