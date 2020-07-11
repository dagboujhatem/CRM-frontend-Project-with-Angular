// Angular
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FournisseurRouting } from "./fournisseur-rouring.module";
import { AddFournisseurComponent } from "./add-fournisseur/add-fournisseur.component";
import { ListFournisseurComponent } from "./list-fournisseur/list-fournisseur.component";
import { DetailFournisseurComponent } from "./detail-fournisseur/detail-fournisseur.component";
import { UpdateFournisseurComponent } from "./update-fournisseur/update-fournisseur.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FournisseurRouting,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  declarations: [
    AddFournisseurComponent,
    ListFournisseurComponent,
    DetailFournisseurComponent,
    UpdateFournisseurComponent,
  ],
})
export class FournisseurModule {}
