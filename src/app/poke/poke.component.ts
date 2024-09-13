import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { response } from 'express';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css'
})
export class PokeComponent {
  buscarNombre: string='';
  pokemonElegido:any=null;

  constructor(private pokemonService: PokemonService){
  }

  buscar(event: any): void {
    this.buscarNombre = event.target.value;

    if (!this.buscarNombre) {
      this.pokemonElegido = null;
      return;
    }

    
    this.pokemonService.getNombreIdPokemon(this.buscarNombre).subscribe(
      response => {
        if (response) {
          this.pokemonElegido = response;
          console.log(this.pokemonElegido);
        } else {
          this.pokemonElegido = null;
        }
      }
    );
  }
}
