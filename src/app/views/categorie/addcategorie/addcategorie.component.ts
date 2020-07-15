import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategorieService } from '../../../service/categorie.service';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';
import { Router } from '@angular/router';
import { ToastrService, ToastRef } from 'ngx-toastr';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {
  constructor(private categorie: CategorieService,
     private adminservice: AdminService,
     private toastr: ToastrService,
    private router: Router) { }
  decoded = jwt_decode(this.adminservice.token);

  categorieForm: FormGroup;

  ngOnInit(): void {
    this.categorieForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
  /****************add categorie ************** */
  AddCategorie() {
    if (this.categorieForm.valid) {

      this.categorie.ajoutCategorie(this.categorieForm.value, this.decoded.data.pme).subscribe((res: any) => {

      });
      return this.toastr.success('categorie added successfully') && this.router.navigateByUrl('/home/categorie/listcategorie');
    } else {
      return this.toastr.warning('categorie could not be added');
    }
  }

}
