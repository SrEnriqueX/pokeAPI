import { Routes } from '@angular/router';
import { PokeComponent } from './poke/poke.component';
import { DetallesPokemonComponent } from './detalles-pokemon/detalles-pokemon.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [
    {
        path:'',
        component:PokeComponent
    },
    {
        path:'detalle-pokemon/:nombre',
        component:DetallesPokemonComponent
    },
    {
        path:'**',
        component:PaginaNoEncontradaComponent
    }
];
