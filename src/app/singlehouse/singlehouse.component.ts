import { Component, OnInit } from '@angular/core';


import { ActivatedRoute,Router} from '@angular/router';
import { ApiHttpService } from '../api-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlehouse',
  templateUrl: './singlehouse.component.html',
  styleUrls: ['./singlehouse.component.css'],
  providers:[ Location ]
})
export class SinglehouseComponent implements OnInit {
  public house;
  public url;
  public check;
  constructor(private _route:ActivatedRoute,private _router:Router,public apihttpservice:ApiHttpService,public location:Location) {
    this.url=this._route.snapshot.paramMap.get('url');    
    this.apihttpservice.getsinglehouse(this.url).subscribe(
    data => {
      this.house = data;
     this.check=1;
      console.log(this.house);
          
    },
    error => {
      console.log("some errpr occured");
      console.log(error.message);
    }
  );
   }

  ngOnInit() {
  }
  public goback():any{
    this.location.back();
  }
}


