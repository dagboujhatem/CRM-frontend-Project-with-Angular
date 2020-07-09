import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Categorie'
        },
        children: [
            {
                path: 'listcategorie',
                component: ListcategorieComponent,
                data: {
                    title: 'List Des Categories'
                }
            },
            {
                path: 'addcategorie',
                component: AddcategorieComponent,
                data: {
                    title: 'Add Categorie'
                }
            },
            {
                path: 'updatecategorie/:id',
                component: UpdatecategorieComponent,
                data: {
                    title: 'Update Categorie'
                }
            },
            // {
            //     path: 'affichageproduit/:id',
            //     component: AffichageProduitComponent,
            //     data: {
            //         title: 'Affichage Produit'
            //     }
            // }
        ],
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategorieRouting { }
