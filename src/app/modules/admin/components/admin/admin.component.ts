import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/modules/admin/services/admin.service';
import { User } from '../../../signup/models/User';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'admin', 'actions'];
  dataSource : MatTableDataSource<User>;
  loading: boolean = false;

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe(
      users => {
        this.users = users;
        this.dataSource = new MatTableDataSource<User>(this.users);
        console.log(users);
      },
      err => console.log(err)
    );
  }

  onChange(user){
    this.loading = true;
    this.adminService.toggleAdmin(user).subscribe(
      user => {
        this.loading = false;
        console.log(user);
      },
      err =>{
        this.loading = false;
        console.log(err);
      } 
    );
  }

  deleteUser(user){
    this.adminService.deleteUser(user).subscribe(
      response => {
        console.log(response);
      },
      err =>{
        console.log(err);
      } 
    );
  }

}
