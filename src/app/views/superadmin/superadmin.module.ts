// Angular
import { AddActivityComponent } from './activity/add-activity/add-activity.component';
import { UpdateActivityComponent } from './activity/update-activity/update-activity.component';
import { ListActivityComponent } from './activity/list-activity/list-activity.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListsocieterComponent } from './listsocieter/listsocieter.component';
import { SuperAdminRouting } from './superadmin-rouring.module';
import { AddsocieterComponent } from './addsocieter/addsocieter.component';
import { UpdatesocieterComponent } from './updatesocieter/updatesocieter.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MatInputModule } from '@angular/material/input';
import { ListUSERComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PipesearchPipe } from '../../pipes/pipesearch.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SuperAdminRouting,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,

    MatInputModule,   
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule
     
  ],
  declarations: [
      ListsocieterComponent,
      AddsocieterComponent,
      UpdatesocieterComponent,
      AdduserComponent,
      ListUSERComponent,
      UpdateUserComponent,
      AddActivityComponent,
      UpdateActivityComponent,
      PipesearchPipe,
      ListActivityComponent
  ],

})
export class SuperAdmin {}
