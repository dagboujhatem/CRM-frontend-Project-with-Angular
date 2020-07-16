// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

// import {  } from './cards.component';

// // Forms Component
// import { FormsComponent } from './forms.component';

// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';

// // Tabs Component
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TabsComponent } from './tabs.component';

// Carousel Component
// import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { CarouselsComponent } from './carousels.component';

// // Collapse Component
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { CollapsesComponent } from './collapses.component';

// // Dropdowns Component
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// // Pagination Component
// import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { PopoversComponent } from './popovers.component';
// // Popover Component
// import { PopoverModule } from 'ngx-bootstrap/popover';
// import { PaginationsComponent } from './paginations.component';
// // Progress Component
// import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// import { ProgressComponent } from './progress.component';
// // Tooltip Component
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { TooltipsComponent } from './tooltips.component'
// // navbars
// import { NavbarsComponent } from './navbars/navbars.component';
// // Components Routing
// import { BaseRoutingModule } from './base-routing.module';
import { ListsocieterComponent } from './listsocieter/listsocieter.component';
import { SuperAdminRouting } from './superadmin-rouring.module';
import { AddsocieterComponent } from './addsocieter/addsocieter.component';
import { UpdatesocieterComponent } from './updatesocieter/updatesocieter.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MatInputModule } from '@angular/material/input';
import { ListUSERComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PipesearchPipe } from '../../pipes/pipesearch.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SuperAdminRouting,
    ReactiveFormsModule,

    MatPaginatorModule,

    MatInputModule,    
  ],
  declarations: [
      ListsocieterComponent,
      AddsocieterComponent,
      UpdatesocieterComponent,
      AdduserComponent,
      ListUSERComponent,
      UpdateUserComponent,
      PipesearchPipe,
         
  ]

})
export class SuperAdmin {}
