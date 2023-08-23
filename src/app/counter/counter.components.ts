import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h1>Desde el componente</h1>
      <h3>Counter: {{ counter }}</h3>
      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="increaseBy(-1)">-1</button>
      <button (click)="reset()">Reset</button>
      `
})

export class CounterComponent {
  public counter = 10;

  increaseBy( value: number ):void{
    this.counter+=value;
  }
  reset():void {
    this.counter = 10;
  }
}