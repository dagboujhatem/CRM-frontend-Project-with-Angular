import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FournisService } from "../../../service/fournis.service";

@Component({
  selector: "app-detail-fournisseur",
  templateUrl: "./detail-fournisseur.component.html",
  styleUrls: ["./detail-fournisseur.component.css"],
})
export class DetailFournisseurComponent implements OnInit {
  id: string;
  fournisseur;
  constructor(private route: ActivatedRoute, private fournis: FournisService) {}

  ngOnInit(): void {
    this.getOneFournisseur();
  }
  getOneFournisseur() {
    this.id = this.route.snapshot.params["id"];
    this.fournis.getOneFournisseur(this.id).subscribe((res) => {
      this.fournisseur = res;
      console.log(res);
    });
  }
}
