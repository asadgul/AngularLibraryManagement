import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Order } from '../Models/models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

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
    this.api.getOrder(this.api.getUserToken()?.id??0).subscribe({
      next:(resp:Order[])=>{
        console.log(resp);
        this.listOfOrders=resp;
        this.ordersToDisplay = this.listOfOrders;
      }
    });
  }

}
