import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPagComponent } from './main-pag/main-pag.component';
import { SeriesComponent } from './series/series.component';
import { AgregarComponent } from './agregar/agregar.component';


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
  ]
})
export class WAnimeModule { }
