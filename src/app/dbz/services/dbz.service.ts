import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 1700
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 2000
    }
  ];
  // onNewCharacter({name, character}: Character): void {
  onNewCharacter(character: Character): void {
    // console.log('Main Page');
    // console.log(character);
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    //   // name,
    //   // power,
    // }
    const newCharacter = { id: uuid(), ...character };
    // mejor resultado en una sola linea
    this.characters.push(newCharacter); // añade al final
    // this.characters.unshift(character); // añade al inicio
    // Hasta ahora no es un dato persistente por que no lleva a una bd

  }
  onDeleteCharacter(index: number) {
    // console.log(index);
    this.characters.splice(index, 1);
    // Ese '1' define que solo se borrara un caracter
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
