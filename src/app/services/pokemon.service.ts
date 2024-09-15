import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlEndPoint: string='https://pokeapi.co/api/v2/pokemon/'
  constructor(private http:HttpClient) { }

  getNombreIdPokemon(nombre:string):Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}${nombre}`);
  }
}
