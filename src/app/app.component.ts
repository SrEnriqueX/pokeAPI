import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeComponent } from './poke/poke.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon';
}
