import { Component, Input } from '@angular/core';
import { FraseComponent } from "../frase/frase.component";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FraseComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {

  mood!: boolean;

  @Input() estado = false;
  onSelect(){ /// quando o método é acionado, a variável mood sai de false para true
    this.mood = true;
  }
}
