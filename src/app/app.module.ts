import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiHttpService } from './api-http.service';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SinglecharacterComponent } from './singlecharacter/singlecharacter.component';
import { SinglehouseComponent } from './singlehouse/singlehouse.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    SinglebookComponent,
    SinglecharacterComponent,
    SinglehouseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2OrderModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'book',component:BookComponent},
      {path:'character',component:CharacterComponent},
      {path:'house',component:HouseComponent},
      {path:'singlebook/:url',component:SinglebookComponent},
      {path:'singlecharacter/:url',component:SinglecharacterComponent},
      {path:'singlehouse/:url',component:SinglehouseComponent}
    ])
  ],
  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
