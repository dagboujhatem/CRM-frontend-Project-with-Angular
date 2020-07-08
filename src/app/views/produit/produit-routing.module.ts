import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';


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
            {
                path: 'updateproduit/:id',
                component: UpdateproduitComponent,
                data: {
                    title: 'Update Produit'
                }
            }
        ],
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProduitRouting { }
