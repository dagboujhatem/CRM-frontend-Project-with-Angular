import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CategorieService } from "../../../service/categorie.service";
import { AdminService } from "../../../service/admin.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-updatecategorie",
  templateUrl: "./updatecategorie.component.html",
  styleUrls: ["./updatecategorie.component.css"],
})
export class UpdatecategorieComponent implements OnInit {
  constructor(
    private adminservice: AdminService,
    private toastr: ToastrService,
    private router: Router,
    private categorie: CategorieService,
    private activateroute: ActivatedRoute
  ) {}
  Id;
  decoded = jwt_decode(this.adminservice.token);
  updatecategorieForm: FormGroup;
  ngOnInit(): void {
    this.Id = this.activateroute.snapshot.paramMap.get("id");
    this.updatecategorieForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
    });
    this.getcategorieById();
  }
  /************get categorie By Id ********** */
  getcategorieById() {
    this.categorie.GetCategorieById(this.Id).subscribe((res: any) => {
      this.updatecategorieForm.patchValue(res);
    });
  }
  /************uUpdate categorie By Id ************** */
  Updatecategorie() {
    if (this.updatecategorieForm.valid) {
      this.categorie
        .UpdatecategorieById(this.Id, this.updatecategorieForm.value)
        .subscribe();
      return (
        this.toastr.success("categorie updated with seccefully") &&
        this.router.navigateByUrl("/home/categorie/listcategorie")
      );
    } else {
      return this.toastr.warning("Update form invalid");
    }
  }
}
