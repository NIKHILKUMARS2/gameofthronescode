import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public all;
  public order:string="name";
  constructor(public apihttpservice:ApiHttpService) { }

  ngOnInit() {
    this.all=this.apihttpservice.book;
    console.log(this.all);

  }

}


