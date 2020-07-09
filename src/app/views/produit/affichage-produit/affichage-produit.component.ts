import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../service/produit.service';
import { ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-affichage-produit',
  templateUrl: './affichage-produit.component.html',
  styleUrls: ['./affichage-produit.component.css']
})
export class AffichageProduitComponent implements OnInit {

  constructor(private adminservice: AdminService, private produit: ProduitService, private activateroute: ActivatedRoute) { }
  Id = this.activateroute.snapshot.paramMap.get('id');
  decoded = jwt_decode(this.adminservice.token);

  Produit;
  ngOnInit(): void {
    this.getProduitById();
  }
  /************get produit By Id *********** */
  getProduitById() {
    this.produit.GetproduitById(this.decoded.data.pme, this.Id).subscribe((res: any) => {
      this.Produit = res;
    });
  }

}
