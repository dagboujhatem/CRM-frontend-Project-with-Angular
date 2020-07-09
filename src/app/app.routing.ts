import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./common/login/login.component";
import { RegisterComponent } from "./common/register/register.component";
import { ForgetComponent } from "./common/forget/forget.component";
import { ResetComponent } from "./common/reset/reset.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "response-reset-password/:token",
    component: ResetComponent,
    data: {
      title: "Page reset",
    },
  },
  {
    path: "forget",
    component: ForgetComponent,
    data: {
      title: "Page forget",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Page register",
    },
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "home",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "superadmin",
        loadChildren: () =>
          import("./views/superadmin/superadmin.module").then(
            (module) => module.SuperAdmin
          ),
      },
      {
        path: "produit",
        loadChildren: () =>
          import("./views/produit/produit.module").then((m) => m.Produit),
      },
      {
        path: "fournisseur",
        loadChildren: () =>
          import("./views/fournisseur/fournisseur.module").then(
            (m) => m.FournisseurModule
          ),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./views/chartjs/chartjs.module").then((m) => m.ChartJSModule),
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./views/icons/icons.module").then((m) => m.IconsModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("./views/notifications/notifications.module").then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: "theme",
        loadChildren: () =>
          import("./views/theme/theme.module").then((m) => m.ThemeModule),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./views/widgets/widgets.module").then((m) => m.WidgetsModule),
      },
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
