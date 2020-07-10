import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProduitRouting } from './produit-routing.module';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { AffichageProduitComponent } from './affichage-produit/affichage-produit.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ProduitRouting,
      ReactiveFormsModule,
      MatButtonToggleModule,
      MatSlideToggleModule

    ],
    declarations: [
        AddproduitComponent,
        ListproduitComponent,
        UpdateproduitComponent,
        AffichageProduitComponent
    ]
})
export class Produit { }
