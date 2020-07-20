import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import { SidebarService } from '../../service/sidebar.service';
import { AuthService } from '../../service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems;

  constructor(
    private router: Router,
    private appSidebarService: SidebarService,
    private auth: AuthService
  ) {
    // this.navItems = this.appSidebarService.items$;
  }
  ngOnInit(): void {
    this.navItems = this.appSidebarService.items$;
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.removeItem('token');
    this.auth.isLogged.next(false);
    this.auth.isAdmin.next(false);
    this.auth.isUser.next(false);
    this.auth.isSuperAdmin.next(false);
    this.router.navigate(['/']);
  }
}
