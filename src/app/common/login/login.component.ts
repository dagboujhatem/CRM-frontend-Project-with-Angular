import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { SidebarService } from '../../service/sidebar.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  hide = true;
  responseData;
  constructor(private auth: AuthService, private router: Router,
    // private sidebar: SidebarService
    ) {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    this.auth.signin(this.LoginForm.value).subscribe((res) => {
      this.responseData = res;
      localStorage.setItem('token', this.responseData.token);
      this.router.navigateByUrl('/home/dashboard');
    });
    // this.sidebar.reloadNavItem();
  }
}
