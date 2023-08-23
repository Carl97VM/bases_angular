import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Batman', 'Flash', 'Acuaman'];
  public deletedHero?: string;

  // console.log(heroNames);

  borrarultimo():void {
    this.deletedHero = this.heroNames.pop();
    console.log("Heroe Eliminado: ",this.deletedHero);
  }



}
