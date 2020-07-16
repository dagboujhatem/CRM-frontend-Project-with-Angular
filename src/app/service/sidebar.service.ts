import { Injectable } from '@angular/core';
import { navItems } from './../_nav';
import {INavData} from '@coreui/angular';
import {Observable, of} from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  items$: Observable<INavData[]>;
  private navItems = navItems;
  constructor() {
    this.items$ = this.getNavItemsByRole();
   }
  token = localStorage.getItem('token');

  decoded = jwt_decode(this.token);
  role = this.decoded.data.role;

    // get navigation item by role
    getNavItemsByRole(): Observable<INavData[]> {
      console.log(this.role);
      if (this.role === 'superAdmin') {
        const filtredItems = this.navItems.filter((item) => {
          return item.url === '/home/dashboard' ||
          item.name === 'Socièté' ||
          item.name === 'User' ||
          item.url === '/home/setting';
        });
        return of(filtredItems);
      }
      if (this.role === 'admin') {
        const filtredItems = this.navItems.filter((item) => {
          return item.url === '/home/dashboard' ||
          item.name === 'Socièté' ||
          item.name === 'User' ||
          item.name === 'Produit' ||
          item.name === 'Categorie' ||
          item.name === 'Fournisseur';
        });
        return of(filtredItems);
      }
      // if (this.role === 'user') {
      //   const filtredItems = this.navItems.filter((item) => {
      //     return item.url === '/home/dashboard' ||
      //     item.name === 'Produit' ||
      //     item.name === 'Categorie' ||
      //     item.name === 'Fournisseur';
      //   });
      //   return of(filtredItems);
      // }

    }
    reloadNavItem() {
      this.role = this.decoded.data.role;
      this.items$ = this.getNavItemsByRole();
    }
}
