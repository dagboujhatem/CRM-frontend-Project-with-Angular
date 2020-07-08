import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProduitRouting } from './produit-routing.module';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ProduitRouting,
      ReactiveFormsModule

    ],
    declarations: [
        AddproduitComponent,
        ListproduitComponent,
        UpdateproduitComponent
    ]
})
export class Produit { }
