import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../service/admin.service';
import { ProduitService } from '../../../service/produit.service';
import * as jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  data: FormData;
  constructor(private adminservice: AdminService, private produit: ProduitService, private activateroute: ActivatedRoute) {
    this.data = new FormData();
   }
   updateproduitform: FormGroup;
  file: File;
  decoded = jwt_decode(this.adminservice.token);
  Id = this.activateroute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getproduitById();
    this.updateproduitform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ref: new FormControl(''),
      stock: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      prix: new FormControl(''),
      min: new FormControl(''),
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
}
