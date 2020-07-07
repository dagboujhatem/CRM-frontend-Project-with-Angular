import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Produits'
        },
        children: [
            {
                path: 'listproduit',
                component: ListproduitComponent,
                data: {
                    title: 'List Des Produits'
                }
            },
            {
                path: 'addproduit',
                component: AddproduitComponent,
                data: {
                    title: 'Add Produit'
                }
            },
            // {
            //     path: 'updatesociete/:id',
            //     component: UpdatesocieterComponent,
            //     data: {
            //         title: 'Update Societé'
            //     }
            // }
        ],
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProduitRouting { }
