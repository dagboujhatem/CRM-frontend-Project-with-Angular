import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "register.component.html",
})
export class RegisterComponent {
  hide = true;
  registerform: FormGroup;
  constructor(private auth: AuthService, private router: Router) {}
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
    this.auth.Register(this.registerform.value).subscribe((res: any) => {
      this.router.navigateByUrl("/login");
    });
  }
}
