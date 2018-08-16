import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public all;
  public order:string="name";
  constructor(public apihttpservice:ApiHttpService) { }

  ngOnInit() {
    this.all=this.apihttpservice.houses;
    console.log(this.all);
  }

}
