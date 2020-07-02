import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-listsocieter',
  templateUrl: './listsocieter.component.html',
  styleUrls: ['./listsocieter.component.css']
})
export class ListsocieterComponent implements OnInit {

  constructor(private adminservice: AdminService) { }
table;
  ngOnInit(): void {
    this.getallpme();
  }
  // ************* get all pme for superadmin*******//
  getallpme() {
    this.adminservice.getall().subscribe((res: any) => {
      this.table = res;
      console.log(this.table);
    });
  }
  /*****************delete pme for supre admin******** */
  delete(i) {
    this.adminservice.deletepme(this.table[i]._id).subscribe((res: any) => {
    });
    this.table.splice(i, 1);
  }

}
