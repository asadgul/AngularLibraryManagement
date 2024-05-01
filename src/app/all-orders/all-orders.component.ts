import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Order } from '../Models/models';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  listOfOrders:Order[]=[];
  ordersToDisplay: Order[] = [];
  columns: string[] = [
    'id',
    'userid',
    'name',
    'bookid',
    'book',
    'date',
    'returned',
  ];
  constructor(private api:ApiService) { }
 
  ngOnInit(): void {
    this.api.AllOrder().subscribe({
      next:(resp:Order[])=>{
        console.log(resp);
        this.listOfOrders=resp;
        this.ordersToDisplay = this.listOfOrders;
      }
    });
  }

}
