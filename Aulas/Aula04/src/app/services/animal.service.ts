import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Animal } from "../models/animal";

@Injectable({
  providedIn: 'root'
})


export class AnimalService {

  constructor(private Http: HttpClient){
  }

  public getAnimais(): Observable<Animal[]>{
    return this.Http.get<Animal[]>("http://localhost:8050/listar-animais")
  }

  public adicionarAnimal(animal: Animal): Observable<string>{
    return this.Http.post<string>("http://localhost:8050/adicionar-animal", animal);
  }
}
