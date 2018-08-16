import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  public books: any = [];
  public book: any = [];
  public characters:any = [];
  public character:any = [];
  public house:any = [];
  public houses:any = [];
  public all = [];
  public booksBaseUrl = "https://anapioficeandfire.com/api/books?page=1&pageSize=50";
  public charactersBaseUrl = "https://anapioficeandfire.com/api/characters?page=1&pageSize=50";
  public housesBaseUrl = "https://anapioficeandfire.com/api/houses?page=1&pageSize=50";
  constructor(public _http: HttpClient) {
    this.getbooks().subscribe(
      data => {
        this.books = data;
        console.log(this.books);
        this.book.push(this.books);
        console.log(this.book);
        this.all.push(this.books);
      },
      error => {
        console.log("some errpr occured");
        console.log(error.message);
      }
    );
    this.getcharacters().subscribe(
      data => {
        this.characters = data;
        this.character.push(this.characters);
        console.log(this.character);
        this.all.push(this.characters);
      },
      error => {
        console.log("some errpr occured");
        console.log(error.message);
      }
    );
    this.gethouses().subscribe(
      data => {
        this.house = data;
        this.houses.push(this.house);
        this.all.push(this.house);
      },
      error => {
        console.log("some errpr occured");
        console.log(error.message);
      }
    );
 

  }
  public getbooks() {
    let response = this._http.get(this.booksBaseUrl);
    console.log(response);
    return response;
  }
  public getcharacters() {
    let response = this._http.get(this.charactersBaseUrl);
    console.log(response);
    return response;
  }
  public gethouses() {
    let response = this._http.get(this.housesBaseUrl);
    console.log(response);
    return response;
  }
  public getsinglebook(url:any):any{
    let response = this._http.get(url);
    
    console.log(response);
    return response;
  }
  public getsinglecharacter(url:any):any{
    let response = this._http.get(url);
    
    console.log(response);
    return response;
  }
  public getsinglehouse(url:any):any{
    let response = this._http.get(url);
    
    console.log(response);
    return response;
  }
}

