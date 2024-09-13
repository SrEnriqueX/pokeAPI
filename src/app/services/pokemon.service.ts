import { HttpClient } from '@angular/common/http';
import { importProvidersFrom, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResults } from '../Interfaces/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlEndPoint: string='https://pokeapi.co/api/v2'
  constructor(private http:HttpClient) { }

  getNombreIdPokemon(nombre:string):Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/pokemon/${nombre}`);
  }
}
