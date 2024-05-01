import { Component, OnInit } from '@angular/core';
import { SideNavItems } from '../Models/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideNaveContent:SideNavItems[]=[
    {
      title:'view books',
      link:'books/library'
    },
    {
      title:'manage books',
      link:'books/maintenance'
    },{
      title:'manage categories',
      link:'books/categories'
    },{
      title:'return book',
      link:'books/return'
    },{
      title:'view users',
      link:'users/list'
    },{
      title:'All Orders',
      link:'users/all-orders'
    },{
      title:'My Orders',
      link:'users/my-orders'
    }

  ];

  

}
