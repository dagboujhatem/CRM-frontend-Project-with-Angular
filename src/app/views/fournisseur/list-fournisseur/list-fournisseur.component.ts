import { Component, OnInit } from "@angular/core";
import { FournisService } from "../../../service/fournis.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-list-fournisseur",
  templateUrl: "./list-fournisseur.component.html",
  styleUrls: ["./list-fournisseur.component.css"],
})
export class ListFournisseurComponent implements OnInit {
  list;
  // id;
  constructor(private fournis: FournisService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fournis.getAllFournisseur().subscribe((res) => {
      // console.log(res);
      this.list = res;
    });
    // this.id = this.route.snapshot.params["id"];
  }

  delete(id, index) {
    this.fournis.deleteOneFournisseur(id).subscribe((res) => {
      console.log(res);
      this.list.splice(index, 1);
    });
  }
}
