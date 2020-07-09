import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FournisService } from "../../../service/fournis.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../../service/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-fournisseur",
  templateUrl: "./update-fournisseur.component.html",
  styleUrls: ["./update-fournisseur.component.css"],
})
export class UpdateFournisseurComponent implements OnInit {
  data;
  fournisseurForm: FormGroup;
  id: string;

  constructor(
    private fournis: FournisService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getOneFournis();
  }
  private formFournis() {
    this.fournisseurForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      email: new FormControl(this.data.email, [Validators.required]),
      addresse: new FormControl(this.data.addresse),
      codepostal: new FormControl(this.data.codepostal),
      ville: new FormControl(this.data.ville),
      pays: new FormControl(this.data.ville),
      Telportable: new FormControl(this.data.Telportable),
      fixe: new FormControl(this.data.fixe),
    });
  }
  getOneFournis() {
    this.fournis.getOneFournisseur(this.id).subscribe((res) => {
      this.data = res;
      this.formFournis();
    });
  }

  onSubmit() {
    if (this.fournisseurForm.valid) {
      this.fournis
        .updateOneFournisseur(this.id, this.fournisseurForm.value)
        .subscribe((res) => {
          console.log(res);
        });
      return this.toastr.success("Hello world!", "Toastr fun!");
    } else return this.toastr.warning("Not Hello world!", "Toastr not fun!");
  }
}
