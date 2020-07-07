import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SettingsService } from '../../../service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
settingForm : FormGroup
  activity;
  constructor(private setting :SettingsService) { }

  ngOnInit(): void {
  this.settingForm =new FormGroup ({
    name : new FormControl(''),
    email:new FormControl(''),
    description : new FormControl(''),
    adress : new FormControl(''),
    telephone:  new FormControl(''),
    fax: new FormControl(''),
    siege: new FormControl(''),
    activity:new FormControl(''),
  });
  this.getAllAct()
  }
getAllAct(){
this.setting.getAllActivity().subscribe(body=>{
  this.activity=body
})
}
}
