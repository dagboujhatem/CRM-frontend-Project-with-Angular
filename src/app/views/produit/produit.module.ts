import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProduitRouting } from './produit-routing.module';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ProduitRouting,
      ReactiveFormsModule

    ],
    declarations: [
        AddproduitComponent,
        ListproduitComponent
    ]
})
export class Produit { }
