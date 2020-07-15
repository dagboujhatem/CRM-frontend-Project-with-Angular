import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { ForgetComponent } from './common/forget/forget.component';
import { ResetComponent } from './common/reset/reset.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'reset-password',
    component: ResetComponent,
    data: {
      title: 'Page reset',
    },
  },
  {
    path: 'forget',
    component: ForgetComponent,
    data: {
      title: 'Page forget',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Page register',
    },
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {

        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module')
            .then((m) => m.DashboardModule),
      },
      {
        path: 'superadmin',
        loadChildren: () =>
          import('./views/superadmin/superadmin.module')
            .then((m) => m.SuperAdmin),
      },
      {
        path: 'produit',
        loadChildren: () =>
          import('./views/produit/produit.module')
            .then((m) => m.Produit),
      },
      {
        path: 'fournisseur',
        loadChildren: () =>
          import('./views/fournisseur/fournisseur.module')
            .then((m) => m.FournisseurModule),
      },
      {
        path: 'categorie',
        loadChildren: () =>
          import('./views/categorie/categorie.module')
            .then((m) => m.Categorie),
      },

      {
        path: 'setting',
        loadChildren: () =>
          import('./views/settings/settings.module').then(
            (m) => m.SettingsModule
          )
      },



],
  },
{ path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
