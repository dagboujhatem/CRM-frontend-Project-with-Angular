import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRouting } from './settings-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRouting,
    FormsModule, 
    ReactiveFormsModule
  ],

})
export class SettingsModule { }
