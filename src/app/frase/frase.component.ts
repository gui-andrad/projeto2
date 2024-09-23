import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frase.component.html',
  styleUrl: './frase.component.css'
})
export class FraseComponent {
  @Input() estado = false; // chama a variável estado e inicializa ela dentro do componente como "false", para que seja exibida apenas depois do click
    
}
