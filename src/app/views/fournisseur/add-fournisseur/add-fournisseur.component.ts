import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FournisService } from '../../../service/fournis.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css'],
})
export class AddFournisseurComponent implements OnInit {
  // decoded = jwt_decode(this.adminservice.token);
  table;
  fournisseurForm: FormGroup;
  id: string;

  constructor(
    private auth: AuthService,
    private fournis: FournisService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fournisseurForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      addresse: new FormControl(''),
      codepostal: new FormControl(''),
      ville: new FormControl(''),
      pays: new FormControl(''),
      Telportable: new FormControl(''),
      fixe: new FormControl(''),
    });
    this.id = this.auth.getUserId();
  }

  onSubmit() {
    if (this.fournisseurForm.valid) {
      this.fournis
        .createFournisseur(this.fournisseurForm.value, this.id)
        .subscribe((res) => {});
      return this.toastr.success('Hello world!', 'Toastr fun!');
    } else { return this.toastr.warning('Not Hello world!', 'Toastr not fun!'); }
  }
}
