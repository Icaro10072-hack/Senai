import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-botao',
  standalone: true,
  styleUrl: './botao.css',
  templateUrl: './botao.html',
})
export class Botao {
  @Input() texto: string = 'clique aqui';
  @Input() cor: string = '#2563eb';
}
