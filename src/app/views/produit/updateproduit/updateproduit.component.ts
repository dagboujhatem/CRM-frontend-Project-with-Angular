import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "../../../service/admin.service";
import { ProduitService } from "../../../service/produit.service";
import * as jwt_decode from "jwt-decode";
import { ActivatedRoute } from "@angular/router";
import { CategorieService } from "../../../service/categorie.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-updateproduit",
  templateUrl: "./updateproduit.component.html",
  styleUrls: ["./updateproduit.component.css"],
})
export class UpdateproduitComponent implements OnInit {
  data: FormData;
  updateproduitform: FormGroup;
  categorietable;
  isAwesome = true;
  file: File;
  decoded = jwt_decode(this.adminservice.token);
  Id = this.activateroute.snapshot.paramMap.get("id");
  // tslint:disable-next-line: max-line-length
  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService,
    private router: Router,
    private categorie: CategorieService,
    private produit: ProduitService,
    private activateroute: ActivatedRoute
  ) {
    this.data = new FormData();
  }

  ngOnInit(): void {
    this.getcatigorie();
    this.getproduitById();
    this.updateproduitform = new FormGroup({
      name: new FormControl("", [Validators.required]),
      ref: new FormControl(""),
      stock: new FormControl(""),
      description: new FormControl("", [Validators.required]),
      prix: new FormControl(""),
      min: new FormControl(""),
      categorie: new FormControl("", [Validators.required]),
      notifRupture: new FormControl(),
    });
  }
  getproduitById() {
    this.produit
      .GetproduitById(this.decoded.data.pme, this.Id)
      .subscribe((res: any) => {
        this.updateproduitform.patchValue(res);
      });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0];
    }
  }
  updateproduitById() {
    if (this.updateproduitform.valid) {
      this.produit
        .UpdateproduitById(
          this.decoded.data.pme,
          this.Id,
          this.updateproduitform.value
        )
        .subscribe((res: any) => {
          this.upload(res._id);
        });
      return (
        this.toastr.success("update succesfully") &&
        this.router.navigateByUrl("/home/produit/listproduit")
      );
    } else {
      return this.toastr.warning("Can't Update");
    }
  }
  upload(id) {
    this.data.set("image", this.file);
    this.produit.upload(this.data, id).subscribe(() => {});
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
  }
}
