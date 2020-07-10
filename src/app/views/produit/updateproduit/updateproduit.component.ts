import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../service/admin.service';
import { ProduitService } from '../../../service/produit.service';
import * as jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../../service/categorie.service';


@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  data: FormData;
  // tslint:disable-next-line: max-line-length
  constructor(private adminservice: AdminService, private categorie: CategorieService, private produit: ProduitService, private activateroute: ActivatedRoute) {
    this.data = new FormData();
   }
   updateproduitform: FormGroup;
   categorietable;
  isAwesome = false;
  file: File;
  decoded = jwt_decode(this.adminservice.token);
  Id = this.activateroute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getcatigorie();
    this.getproduitById();
    this.updateproduitform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ref: new FormControl(''),
      stock: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      prix: new FormControl(''),
      min: new FormControl(''),
      categorie: new FormControl('', [Validators.required]),
      notifRupture: new FormControl(this.isAwesome)
    });
  }
  getproduitById() {
    this.produit.GetproduitById(this.decoded.data.pme, this.Id).subscribe((res: any) => {
      this.updateproduitform = new FormGroup({
        name: new FormControl(res.name, [Validators.required]),
        ref: new FormControl(res.ref),
        stock: new FormControl(res.stock),
        description: new FormControl(res.description, [Validators.required]),
        prix: new FormControl(res.prix),
        min: new FormControl(res.min),
        categorie: new FormControl(res.categorie, [Validators.required]),
        notifRupture: new FormControl(this.isAwesome)
      });
    });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
  }
}
  updateproduitById() {
    this.produit.UpdateproduitById(this.decoded.data.pme, this.Id, this.updateproduitform.value).subscribe((res: any) => {
    this.upload(res._id);
    });
  }
  upload(id) {
    this.data.set('image', this.file);
    this.produit.upload(this.data, id).subscribe(res => {
        console.log(res);
      });
    // this.router.navigateByUrl('/home');
  }
  /***********get categorie *********** */
getcatigorie() {
  this.categorie.GetCategorie(this.decoded.data.pme).subscribe((res: any) => {
    this.categorietable = res;
  });
}
toggleIsAwesome() {
  this.isAwesome = !this.isAwesome;
  this.updateproduitform.controls.notifRupture.setValue(this.isAwesome);
  console.log(this.isAwesome);
  console.log(this.updateproduitform.value);
}
}
