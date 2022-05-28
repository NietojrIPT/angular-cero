import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { animesModule } from './animes/animes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';
import { MainPagComponent } from './wanime/main-pag/main-pag.component';
import { WAnimeModule } from './wanime/wanime.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    animesModule,
    ContadorModule,
    WAnimeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
