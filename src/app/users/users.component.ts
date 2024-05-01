import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../Models/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  columnsToDisplay: string[] = [
    //'id',
    'name',
    'email',
    'mobile',
  //  'blocked',
    'active',
    'created on'
 //   'action',
  ];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe({
      next:(resp:User[])=>{
        this.users=resp;

      }
    })
  }

}
