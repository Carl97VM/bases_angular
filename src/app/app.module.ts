import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    // vamos declarando los modulos que se requieran
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
    // importamos desde donde se creo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
