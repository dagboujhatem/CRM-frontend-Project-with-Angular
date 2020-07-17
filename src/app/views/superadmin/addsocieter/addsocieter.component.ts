import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../../service/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../../service/activity.service';

@Component({
  selector: 'app-addsocieter',
  templateUrl: './addsocieter.component.html',
  styleUrls: ['./addsocieter.component.css'],
})
export class AddsocieterComponent implements OnInit {
  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private activity: ActivityService
  ) {}
  societeform: FormGroup;
  activitytable;
  ngOnInit(): void {
    this.getactivité()
    this.societeform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      fax: new FormControl('', [Validators.required]),
      siege: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required]),
    });
  }
  getactivité() {
    this.activity.getactforsoci().subscribe((res: { activity; count }) => {
      this.activitytable = res.activity;
      console.log(this.activitytable);
    });
  }
  Addsociete() {
    if (!this.societeform.valid) {
      return this.toastr.warning('Operation not successfull');
    }
    this.adminservice.addsociete(this.societeform.value).subscribe(() => {
      this.router.navigate(['../listsociete'], { relativeTo: this.route });
      return this.toastr.success('Pme Added Successfully');
    });
  }
}
