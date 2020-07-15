import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategorieService } from '../../../service/categorie.service';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {
  constructor(private categorie: CategorieService,
     private adminservice: AdminService) { }
  decoded = jwt_decode(this.adminservice.token);

  categorieForm: FormGroup;

  ngOnInit(): void {
    this.categorieForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
  /****************add categorie ************** */
  AddCategorie() {
    this.categorie.AddCategorie(this.categorieForm.value, this.decoded.data.pme).subscribe((res: any) => {
    });

  }

}
