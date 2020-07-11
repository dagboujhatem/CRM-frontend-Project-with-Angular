import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategorieService } from '../../../service/categorie.service';
import { AdminService } from '../../../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {
  constructor(private adminservice: AdminService, private categorie: CategorieService, private activateroute: ActivatedRoute) { }
  Id = this.activateroute.snapshot.paramMap.get('id');
  decoded = jwt_decode(this.adminservice.token);
  updatecategorieForm: FormGroup;
  ngOnInit(): void {
    this.getcategorieById();
    this.updatecategorieForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
  /************get categorie By Id ********** */
  getcategorieById() {
    this.categorie.GetCategorieById(this.decoded.data.pme, this.Id).subscribe((res: any) => {
      this.updatecategorieForm = new FormGroup({
        name: new FormControl(res.name, [Validators.required])
      });
    });
  }

}
