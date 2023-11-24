import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
livro: any;
autoresForm: any;
incluir() {
throw new Error('Method not implemented.');
}
editoras: any;

}
