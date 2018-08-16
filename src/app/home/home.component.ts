import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public all;
 public order:string="name";

  constructor(public apihttpservice:ApiHttpService) { }

  ngOnInit() {
    this.all=this.apihttpservice.all;
    console.log(this.all);
  }

}
