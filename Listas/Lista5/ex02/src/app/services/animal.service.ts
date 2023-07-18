import { Animal } from './../models/animal';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AnimalService{
  constructor(private http: HttpClient){ }

  getAnimais(): Observable<Animal[]>{
    return this.http.get<Animal[]>("http://localhost:8050/listar-animais")
  }
  adicionarAnimal(animal: Animal): Observable<string>{
    return this.http.post<string>("http://localhost:8050/adicionar-animal", animal)
  }
}
