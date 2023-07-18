import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {
  public animal: Animal[] = [];

  constructor(private animalService: AnimalService){ }
  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((response: Animal[]) => {
     this.animal = response;
    })
  }



}
