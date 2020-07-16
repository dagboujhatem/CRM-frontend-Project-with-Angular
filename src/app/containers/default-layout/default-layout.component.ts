import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems;
  constructor(private router: Router,
    private appSidebarService: SidebarService
    ) {
      this.navItems = this.appSidebarService.items$;
    }
    ngOnInit(): void {
      this.navItems = this.appSidebarService.items$;
      this.appSidebarService.reloadNavItem();
    }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
