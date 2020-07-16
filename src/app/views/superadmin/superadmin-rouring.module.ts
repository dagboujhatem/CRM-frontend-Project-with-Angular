import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListsocieterComponent } from "./listsocieter/listsocieter.component";
import { AddsocieterComponent } from "./addsocieter/addsocieter.component";
import { UpdatesocieterComponent } from "./updatesocieter/updatesocieter.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { ListUSERComponent } from "./list-user/list-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Administration",
    },
    children: [
      {
        path: "listsociete",
        component: ListsocieterComponent,
        data: {
          title: "List Des Societé",
        },
      },
      {
        path: "addsociete",
        component: AddsocieterComponent,
        data: {
          title: "Add Societé",
        },
      },
      {
        path: "updatesociete/:id",
        component: UpdatesocieterComponent,
        data: {
          title: "Update Societé",
        },
      },
      {
        path: "adduser",
        component: AdduserComponent,
        data: {
          title: "Add User",
        },
      },
      {
        path: "listuser",
        component: ListUSERComponent,
        data: {
          title: "List User",
        },
      },
      {
        path: "updateuser/:id",
        component: UpdateUserComponent,
        data: {
          title: "Update User",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  //   declarations: [ListsocieterComponent]
})
export class SuperAdminRouting {}
