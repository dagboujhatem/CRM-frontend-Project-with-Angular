import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerform: FormGroup;
  constructor(private auth: AuthService) { }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.registerform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  // faire click button sur creat account
  register() {
    this.auth.Register(this.registerform.value).subscribe((res: any) => {
      console.log(res);
    });
  }

}
