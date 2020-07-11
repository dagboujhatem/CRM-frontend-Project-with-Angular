
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ProduitRouting } from "./produit-routing.module";
import { AddproduitComponent } from "./addproduit/addproduit.component";
import { ListproduitComponent } from "./listproduit/listproduit.component";
import { UpdateproduitComponent } from "./updateproduit/updateproduit.component";
import { AffichageProduitComponent } from "./affichage-produit/affichage-produit.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProduitRouting,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  declarations: [
    AddproduitComponent,
    ListproduitComponent,
    UpdateproduitComponent,
    AffichageProduitComponent,
  ],

})
export class Produit {}
