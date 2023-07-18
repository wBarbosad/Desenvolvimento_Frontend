import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class PokemonService{

  constructor(private http: HttpClient){

  }
  public getPokemons(): Observable<any>{
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon")
  }

  public getInfoPokemon(nome: string): Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nome}`)
  }
}
