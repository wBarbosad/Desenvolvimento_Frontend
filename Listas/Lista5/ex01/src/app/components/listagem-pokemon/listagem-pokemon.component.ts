import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-listagem-pokemon',
  templateUrl: './listagem-pokemon.component.html',
  styleUrls: ['./listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit {
  public pokemons: any[] = [];
  constructor(private pokemonService: PokemonService){ }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      console.log(response.results)
      for(let pokemon of response.results){
        this.pokemonService.getInfoPokemon(pokemon.name).subscribe((res: any) => {
          this.pokemons.push(res)
          console.log(res)
        })
      }
    })
  }

}
