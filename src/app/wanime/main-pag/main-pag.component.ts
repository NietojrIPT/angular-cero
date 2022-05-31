import { Component, OnInit } from '@angular/core';
import { SeriesAnime } from '../interfaces/animes.interface';
import { Wanimeservice } from '../services/wanine.service';



@Component({
  selector: 'app-main-pag',
  templateUrl: './main-pag.component.html',
  styleUrls: ['./main-pag.component.css'],
})
export class MainPagComponent {

  // seriesAnime :  SeriesAnime[] = [];
  
  nuevo: SeriesAnime = {
    nombre: 'Horimiya',
    temporada: 2
  };




  constructor(){
    // this.seriesAnime = this.wanimeservices.seriesAnime;

  }

}
