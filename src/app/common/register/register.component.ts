import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-dashboard",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  hide = true;
  registerform: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.registerform = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+$"),
        Validators.minLength(8),
      ]),
    });
  }
  // faire click button sur creat account
  register() {
    this.auth.Register(this.registerform.value).subscribe(
      () => {
        this.router.navigate(["/login"]);
        this.toastr.success("Account Created Successfully");
      },
      (err) => {
        this.router.navigate(["/register"]);
        return this.toastr.warning(err.error.message);
      }
    );
  }
}
