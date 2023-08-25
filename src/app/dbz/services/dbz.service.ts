import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
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
  onNewCharacter(character: Character): void {
    // console.log('Main Page');
    // console.log(character);
    this.characters.push(character); // añade al final
    // this.characters.unshift(character); // añade al inicio
    // Hasta ahora no es un dato persistente por que no lleva a una bd

  }
  onDeleteCharacter(index: number) {
    // console.log(index);
    this.characters.splice(index, 1);
    // Ese '1' define que solo se borrara un caracter
  }

}
