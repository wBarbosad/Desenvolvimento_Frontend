import { Animal } from './../../../../models/animal';
import { AnimalService } from './../../../../services/animal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit{

  public animais!: Animal[];

  constructor(private animalService: AnimalService){ }

  ngOnInit(): void {
    this.animalService.getAnimais()
      .subscribe((response: Animal[])=>{
        this.animais = response;
    })
  }

}
