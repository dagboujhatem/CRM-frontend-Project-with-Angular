import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AdminService } from "../../../service/admin.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-updatesocieter",
  templateUrl: "./updatesocieter.component.html",
  styleUrls: ["./updatesocieter.component.css"],
})
export class UpdatesocieterComponent implements OnInit {
  constructor(
    private adminservice: AdminService,
    private activateroute: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  Id = this.activateroute.snapshot.paramMap.get("id");
  societeUpdateform: FormGroup;
  societe;
  ngOnInit(): void {
    this.getPmeById();
    this.societeUpdateform = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      description: new FormControl("", [Validators.required]),
      adress: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      fax: new FormControl("", [Validators.required]),
      siege: new FormControl("", [Validators.required]),
      activity: new FormControl("", [Validators.required]),
    });
  }
  /***************get pme by id ****************** */
  getPmeById() {
    this.adminservice.getsocieteById(this.Id).subscribe((res: any) => {
      this.societeUpdateform = new FormGroup({
        name: new FormControl(res.name, [Validators.required]),
        email: new FormControl(res.email, [
          Validators.required,
          Validators.email,
        ]),
        description: new FormControl(res.description, [Validators.required]),
        adress: new FormControl(res.adress, [Validators.required]),
        telephone: new FormControl(res.telephone, [Validators.required]),
        fax: new FormControl(res.fax, [Validators.required]),
        siege: new FormControl(res.siege, [Validators.required]),
        activity: new FormControl(res.activity, [Validators.required]),
      });
    });
  }
  /******************update pme by id *********** */
  updatePmeById() {
    if (!this.societeUpdateform.valid)
      return this.toastr.warning("Operation not successfull");
    this.adminservice
      .updatesociete(this.Id, this.societeUpdateform.value)
      .subscribe(() => {
        this.router.navigate(["../../listsociete"], { relativeTo: this.route });
        return this.toastr.success("Pme Updated Successfully");
      });
  }
}
