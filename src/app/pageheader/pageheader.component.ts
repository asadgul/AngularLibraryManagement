import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss']
})
export class PageheaderComponent implements OnInit {

  @Output() menuclicked=new EventEmitter<boolean>();
  constructor(public api:ApiService) { 
  }
  logout(){
    this.api.deleteToken();
  }

  ngOnInit(): void {
  }

}
