import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  // imports: [], removing imports array as changing this component to module based one
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
