// computed and input import needed to use signals
// import { Component, Input, Output, computed, input } from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';

import { User } from './user.model'; 
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports:[CardComponent]
})
export class UserComponent {
  // convincing ts with ! that we will receive values for avatar and name
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // possible to set alternative Input property
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // ---
  // select = output<string>(); signal related approach;
  // ---

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // instead we're using with computed value (signal approach)

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
    // console.log("Clicked!");
  }
}
