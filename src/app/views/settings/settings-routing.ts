import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Settings'
        },
        children: [
            {
                path: 'settings',
                component: SettingsComponent,
                data: {
                    title: 'settings societé'
                }
            },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    //   declarations: [ListsocieterComponent]
})
export class SettingsRouting { }
