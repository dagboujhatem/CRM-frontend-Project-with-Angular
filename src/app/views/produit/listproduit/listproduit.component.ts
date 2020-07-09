import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../service/produit.service';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';


@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
table;
decoded = jwt_decode(this.adminservice.token);
  constructor(private produit: ProduitService, private adminservice: AdminService) { }

  ngOnInit(): void {
    this.getproduit();
  }
  getproduit() {
    this.produit.Getallproduit(this.decoded.data.pme).subscribe((res: any) => {
      this.table = res;
    });
  }
  delete(i, id) {
    this.produit.DeleteProduitById(this.decoded.data.pme, id).subscribe((res: any) => {
    });
    this.table.splice(i, 1);
  }
}
