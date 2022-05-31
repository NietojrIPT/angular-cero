import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPagComponent } from './main-pag/main-pag.component';
import { SeriesComponent } from './series/series.component';
import { AgregarComponent } from './agregar/agregar.component';
import { Wanimeservice } from './services/wanine.service';


@NgModule({
  declarations: [
    MainPagComponent,
    SeriesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPagComponent
  ],

  providers: [
    Wanimeservice
  ]
})
export class WAnimeModule { }
