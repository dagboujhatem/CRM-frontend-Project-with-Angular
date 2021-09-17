import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsuperadminComponent } from './settingsuperadmin/settingsuperadmin.component';




const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Settings'
        },
        component: SettingsuperadminComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes, {useHash: true})],
    exports: [RouterModule],
})
export class SettingsRouting { }
