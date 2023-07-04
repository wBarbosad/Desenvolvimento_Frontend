import { AnimalService } from './../../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/anima';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public animais: Animal[] = [];

  constructor(private AnimalService: AnimalService){ }
  
  ngOnInit(): void {
    this.AnimalService.getAnimais().subscribe((response) => {
      this.animais = response
    })
  }


}
