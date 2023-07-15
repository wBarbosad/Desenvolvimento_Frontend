import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Animal } from "../models/animal";

@Injectable({
  providedIn: 'root'
})

export class AnimalService{

  constructor(private Http: HttpClient){

  }

  buscarAnimais(): Observable<Animal[]>{ //Nosso GET!
    return this.Http.get<Animal[]>("http://localhost:8050/listar-animais");
  }
}

