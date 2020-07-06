import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsocieterComponent } from './listsocieter/listsocieter.component';
import { AddsocieterComponent } from './addsocieter/addsocieter.component';
import { UpdatesocieterComponent } from './updatesocieter/updatesocieter.component';



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Administration'
        },
        children: [
            {
                path: 'listsociete',
                component: ListsocieterComponent,
                data: {
                    title: 'List Des Societé'
                }
            },
            {
                path: 'addsociete',
                component: AddsocieterComponent,
                data: {
                    title: 'Add Societé'
                }
            },
            {
                path: 'updatesociete/:id',
                component: UpdatesocieterComponent,
                data: {
                    title: 'Update Societé'
                }
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    //   declarations: [ListsocieterComponent]
})
export class SuperAdminRouting { }
