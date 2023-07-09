import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public animes: Anime[] = new Array<Anime>();

  constructor(){
    this.animes.push(new Anime(1, "Dragon Ball Z", 1989, 9, "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe"))
    this.animes.push(new Anime(2, "Dragon Ball Kai", 2009, 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREj0h944Lw7zqJFf-NgOM8FXneUyBGqyCLyw&usqp=CAU"))
  }
}


