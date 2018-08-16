import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public all;
  public order:string="aliases";
  constructor(public apihttpservice:ApiHttpService) { }

  ngOnInit() {
    this.all=this.apihttpservice.character;
    console.log(this.all);

  }

}
