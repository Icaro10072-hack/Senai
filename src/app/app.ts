import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetoNome } from './components/projeto-nome/projeto-nome'; // ajuste o caminho se precisar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjetoNome],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Senai');
}
