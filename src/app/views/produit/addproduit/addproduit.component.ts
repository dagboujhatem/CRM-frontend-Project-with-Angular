import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';
import * as jwt_decode from 'jwt-decode';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  constructor(private adminservice: AdminService) { }
  decoded = jwt_decode(this.adminservice.token);
  table;
  produitform: FormGroup;
  ngOnInit(): void {
    this.produitform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ref: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      pme:  new FormControl(''),
      prix: new FormControl(''),
      min: new FormControl(''),

    });
    this.getpme();
  }
getpme() {
  this.adminservice.getPmeByAdminId(this.decoded.data._id).subscribe((res: any) => {
    this.table = res;
    console.log(this.table);

});
}
}
