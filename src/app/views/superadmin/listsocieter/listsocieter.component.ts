import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-listsocieter',
  templateUrl: './listsocieter.component.html',
  styleUrls: ['./listsocieter.component.css']
})
export class ListsocieterComponent implements OnInit {

  constructor(private adminservice: AdminService) { }
table;
decoded = jwt_decode(this.adminservice.token);
  ngOnInit(): void {
    this.getallpme();
  }
  // ************* get all pme for superadmin*******//
  getallpme() {
    if (this.decoded.data.role === 'superadmin') {
       this.adminservice.getall().subscribe((res: any) => {
      this.table = res;
    });
    } else {
      this.adminservice.getPmeByAdminId(this.decoded.data._id).subscribe((res: any) => {
        this.table = res;
      });
    }
    this.adminservice.getall().subscribe((res: any) => {
      this.table = res;
      console.log(this.table);
    });
  }
  /*****************delete pme for supre admin******** */
  delete(i) {
    let j=this.table[i]._id
    this.adminservice.deletepme(j).subscribe((res: any) => {
    });

  }

}
