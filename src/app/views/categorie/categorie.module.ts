import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CategorieRouting } from './categorie-routing.module';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';
import { CategpipePipe } from '../../pipes/categpipe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from "@angular/material/paginator";




@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CategorieRouting,
      ReactiveFormsModule,
      MatInputModule,
      MatIconModule,
      MatPaginatorModule,
      MatFormFieldModule

    ],
    declarations: [
       AddcategorieComponent,
       ListcategorieComponent,
       UpdatecategorieComponent,
       CategpipePipe
    ]
})
export class Categorie { }
