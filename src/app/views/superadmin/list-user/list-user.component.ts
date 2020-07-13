import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AdminService } from '../../../service/admin.service';
import { UserServiceService } from '../../../service/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUSERComponent implements OnInit {
  table;
  decoded = jwt_decode(this.adminservice.token);
  constructor(private adminservice : AdminService , private usersrvice : UserServiceService) { }

  ngOnInit(): void {
   this.getallUser()
  }
getallUser(){
    this.usersrvice.getAllUsr(this.decoded.data._id).subscribe((res: any) => {
   this.table = res;
});
}
deleteUser(i){
  let j=this.table[i]._id
  this.usersrvice.removeUser(j).subscribe((res:any) =>{
    console.log(res);
  },err=>{
    console.log(err)
  })
}
}

