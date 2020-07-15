import { Component, OnInit } from "@angular/core";
import { FournisService } from "../../../service/fournis.service";
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-list-fournisseur",
  templateUrl: "./list-fournisseur.component.html",
  styleUrls: ["./list-fournisseur.component.css"],
})
export class ListFournisseurComponent implements OnInit {
  list;
  pageSize = 2;
  pageSizeOptions = [2, 5, 10];
  totalFournis;
  currentPage = 1;
  constructor(private fournis: FournisService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getFournisPme();
  }
  onChange(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pageSize = pageData.pageSize;
    this.fournis
      .getAllFournisseur(this.pageSize, this.currentPage)
      .subscribe((res: { fournis; count }) => {
        this.list = res.fournis;
        this.totalFournis = res.count;
      });
  }

  getFournisPme() {
    this.fournis
      .getAllFournisseur(this.pageSize, this.currentPage)
      .subscribe((res: { fournis; count }) => {
        this.list = res.fournis;
        this.totalFournis = res.count;
      });
  }

  delete(id, index) {
    this.fournis.deleteOneFournisseur(id).subscribe((res) => {
      this.list.splice(index, 1);
      this.getFournisPme();
    });
  }
}
