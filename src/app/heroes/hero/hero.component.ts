import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  get hobbieName(): string {
    return this.name.toUpperCase();
  }

  reset(): void {
    this.name = 'IronMan';
    this.age = 45;
    // document.querySelectorAll('h1')?.forEach(element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // }) // no es una buena practica forzar estas cosas
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 25;
  }

  getvalue():boolean {
    return true;
  }

}
