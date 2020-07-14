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
      });
  }
}
