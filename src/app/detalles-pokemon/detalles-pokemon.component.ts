import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './detalles-pokemon.component.html',
  styleUrl: './detalles-pokemon.component.css'
})
export class DetallesPokemonComponent implements OnInit{
  pokemon: any = null;
  constructor(private router: ActivatedRoute, private pokemonService:PokemonService, private route:Router){}


  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      const nombre=params.get('nombre');
      if(nombre){
        this.pokemonService.getNombreIdPokemon(nombre).subscribe(dato=>{
          console.log(dato);
          this.pokemon=dato;  
        });
      }
    });
  }
  volverInicio(): void {
    this.route.navigate(['/']);
  }
}
