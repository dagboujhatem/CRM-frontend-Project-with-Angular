import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListFournisseurComponent } from "./list-fournisseur/list-fournisseur.component";
import { AddFournisseurComponent } from "./add-fournisseur/add-fournisseur.component";
import { DetailFournisseurComponent } from "./detail-fournisseur/detail-fournisseur.component";
import { UpdateFournisseurComponent } from "./update-fournisseur/update-fournisseur.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Fournisseur",
    },
    children: [
      {
        path: "detail-fournisseur/:id",
        component: DetailFournisseurComponent,
        data: {
          title: "Detail Fournisseur",
        },
      },
      {
        path: "update-fournisseur/:id",
        component: UpdateFournisseurComponent,
        data: {
          title: "Update Fournisseur",
        },
      },
      {
        path: "list-fournisseur",
        component: ListFournisseurComponent,
        data: {
          title: "List Des Fournisseur",
        },
      },
      {
        path: "add-fournisseur",
        component: AddFournisseurComponent,
        data: {
          title: "Add Fournisseur",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FournisseurRouting {}
