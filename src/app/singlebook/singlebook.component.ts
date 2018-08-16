import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router} from '@angular/router';
import { ApiHttpService } from '../api-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css'],
  providers:[ Location ]
})
export class SinglebookComponent implements OnInit {
public book;
public url;
public check;

  constructor(private _route:ActivatedRoute,private _router:Router,public apihttpservice:ApiHttpService,public location:Location) { 
    this.url=this._route.snapshot.paramMap.get('url');    
    this.apihttpservice.getsinglebook(this.url).subscribe(
    data => {
      this.book = data;
     this.check=1;
      console.log(this.book);
          
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
