import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FournisService } from "../../../service/fournis.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../../service/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-fournisseur",
  templateUrl: "./add-fournisseur.component.html",
  styleUrls: ["./add-fournisseur.component.css"],
})
export class AddFournisseurComponent implements OnInit {
  // decoded = jwt_decode(this.adminservice.token);
  table;
  fournisseurForm: FormGroup;
  id: string;

  constructor(
    private auth: AuthService,
    private fournis: FournisService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fournisseurForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      addresse: new FormControl(""),
      codepostal: new FormControl(""),
      ville: new FormControl(""),
      pays: new FormControl(""),
      Telportable: new FormControl(""),
      fixe: new FormControl(""),
    });
    this.id = this.auth.getUserId();
  }

  onSubmit() {
    if (this.fournisseurForm.valid) {
      this.fournis
        .createFournisseur(this.fournisseurForm.value, this.id)
        .subscribe((res) => {});
      this.router.navigate(["../list-fournisseur"], { relativeTo: this.route });
      return this.toastr.success("Fournisseur Added Successfully");
    } else return this.toastr.warning("Operation not successfull");
  }
}
