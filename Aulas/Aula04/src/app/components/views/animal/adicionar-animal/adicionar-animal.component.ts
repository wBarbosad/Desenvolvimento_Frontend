import { AnimalService } from './../../../../services/animal.service';
import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nome!: string;
  public raca!: string;
  public peso!: number;

  constructor(private animalService: AnimalService, private router: Router){ }

  public adicionarAnimal(){
    let animal = new Animal(this.nome, this.raca, this.peso)

    this.animalService.adicionarAnimal(animal).subscribe((response) => {
      console.log(response)
    })

    this.router.navigate(["/"])
  }


}
