
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProduitRouting } from './produit-routing.module';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { AffichageProduitComponent } from './affichage-produit/affichage-produit.component';
import { ProdpipePipe } from '../../pipes/prodpipe.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProduitRouting,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    AddproduitComponent,
    ListproduitComponent,
    UpdateproduitComponent,
    AffichageProduitComponent,
    ProdpipePipe
  ],

})
export class Produit {}
