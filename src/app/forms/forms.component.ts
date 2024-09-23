import { Component } from '@angular/core';
import { FraseComponent } from "../frase/frase.component";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FraseComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {

  estado: string = "";
  mood!: boolean;

  onSelect(){ /// quando o método é acionado, a variável mood sai de false para true
    this.mood = true;
  }
}
