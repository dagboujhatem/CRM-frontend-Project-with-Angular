import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';
import * as jwt_decode from 'jwt-decode';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProduitService } from '../../../service/produit.service';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  data: FormData;
  constructor(private adminservice: AdminService, private produit: ProduitService) {
    this.data = new FormData();
  }
  file: File;
  decoded = jwt_decode(this.adminservice.token);
  table;
  produitform: FormGroup;
  ngOnInit(): void {
    this.produitform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ref: new FormControl(''),
      stock: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      prix: new FormControl(''),
      min: new FormControl(''),
    });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
  }
}
addproduit() {
  this.produit.addProduit(this.decoded.data.pme, this.produitform.value).subscribe((res: any) => {
    this.upload(res._id);
  });
}
upload(id) {
  this.data.set('image', this.file);
  this.produit.upload(this.data, id).subscribe(res => {
    });
  // this.router.navigateByUrl('/home');
}


}
