import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settingsuperadmin',
  templateUrl: './settingsuperadmin.component.html',
  styleUrls: ['./settingsuperadmin.component.css']
})
export class SettingsuperadminComponent implements OnInit {

  constructor() { }
  superadminform: FormGroup;
  isAwesome = false;
  ngOnInit(): void {
    this.superadminform = new FormGroup({
      isVerified: new FormControl()
    });
  }
  toggleIsAwesome() {
    this.isAwesome = !this.isAwesome;
    this.superadminform.controls.isVerified.setValue(this.isAwesome);
    console.log(this.isAwesome);
    console.log(this.superadminform.value);
  }
  update() {
    
  }

}
