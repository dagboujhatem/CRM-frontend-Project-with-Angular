import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsocieterComponent } from './listsocieter/listsocieter.component';



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
