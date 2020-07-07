import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-addsocieter',
  templateUrl: './addsocieter.component.html',
  styleUrls: ['./addsocieter.component.css']
})
export class AddsocieterComponent implements OnInit {

  constructor(private adminservice: AdminService) { }
  societeform: FormGroup;
  ngOnInit(): void {
    this.societeform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      fax: new FormControl('', [Validators.required]),
      siege: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required])
    });
  }
  Addsociete() {
    this.adminservice.addsociete(this.societeform.value).subscribe((res: any) => {
      console.log(res);
    });
  }

}