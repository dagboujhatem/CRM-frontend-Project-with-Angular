import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsRouting } from "./settings-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SettingsuperadminComponent } from "./settingsuperadmin/settingsuperadmin.component";

@NgModule({
  imports: [
    CommonModule,
    SettingsRouting,
    FormsModule,
    ReactiveFormsModule,
    SettingsRouting,
  ],
  declarations: [SettingsuperadminComponent],
})
export class SettingsModule {}
