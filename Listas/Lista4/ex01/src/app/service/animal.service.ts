import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class AnimalService{

  constructor(private Http: HttpClient){

  }

  //buscarAnimais(Http).observable(){

  //}
}

