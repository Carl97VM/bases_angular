import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor() { }

  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000
    }, {
      name: 'Vegeta',
      power: 1700
    }, {
      name: 'Goku',
      power: 2000
    }
  ];
  onNewCharacter( character: Character ): void {
    console.log('Main Page');

    console.log(character);

  }

}
