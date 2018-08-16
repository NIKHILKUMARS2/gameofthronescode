import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router} from '@angular/router';
import { ApiHttpService } from '../api-http.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-singlecharacter',
  templateUrl: './singlecharacter.component.html',
  styleUrls: ['./singlecharacter.component.css'],
  providers:[ Location ]
})
export class SinglecharacterComponent implements OnInit {
  public character;
  public url;
  public check;
  constructor(private _route:ActivatedRoute,private _router:Router,public apihttpservice:ApiHttpService,public location:Location) {
    this.url=this._route.snapshot.paramMap.get('url'); 
    this.apihttpservice.getsinglecharacter(this.url).subscribe(
      data => {
        this.character = data;
       this.check=1;
        console.log(this.character);
            
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


