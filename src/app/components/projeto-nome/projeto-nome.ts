import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projeto-nome',
  imports: [],
  templateUrl: './projeto-nome.html',
  styleUrl: './projeto-nome.css',
})
export class ProjetoNome {
  mensagem = signal('Componente funcionando!');
  contador = signal(0);

  incrementar() {
    this.contador.update((valor) => valor + 1);
  }
}