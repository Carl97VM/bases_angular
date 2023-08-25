import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 1200
    },
    {
      name: 'Jajirobe',
      power: 400
    }
  ];
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  // Se define el tipo de datos en el emitter
  onDeleteCharacter(index: number): void {
    // Emitir el id del personaje
    console.log({ index });
    this.onDelete.emit(index);

  }
}
