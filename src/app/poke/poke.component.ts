import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css'
})
export class PokeComponent {
  buscarNombre: string='';
  mensajeAlerta: string='';

  constructor(private router: Router){}
  buscar(): void {
    if (this.buscarNombre) {
      this.router.navigate(['/detalle-pokemon/', this.buscarNombre]);
      this.mensajeAlerta = ''; 
    }else{
      this.mensajeAlerta='Por favor ingresar un nombre o ID del pokemon'
    }
  }

}
