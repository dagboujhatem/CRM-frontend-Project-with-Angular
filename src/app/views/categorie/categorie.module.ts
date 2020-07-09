import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CategorieRouting } from './categorie-routing.module';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { ListcategorieComponent } from './listcategorie/listcategorie.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      CategorieRouting,
      ReactiveFormsModule

    ],
    declarations: [
       AddcategorieComponent,
       ListcategorieComponent,
       UpdatecategorieComponent
    ]
})
export class Categorie { }
