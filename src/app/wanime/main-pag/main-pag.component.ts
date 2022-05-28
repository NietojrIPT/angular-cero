import { Component, OnInit } from '@angular/core';
import { SeriesAnime } from '../interfaces/animes.interface';



@Component({
  selector: 'app-main-pag',
  templateUrl: './main-pag.component.html',
  styleUrls: ['./main-pag.component.css'],
})
export class MainPagComponent {

  seriesAnime:SeriesAnime[] = [
  { 
    nombre:'Violet Evergarden',
    temporada: 2
  },
  { 
    nombre:'Demon Slayer',
    temporada: 3
  },
  { 
    nombre:'Darwins Game',
    temporada: 1
  },
  { 
    nombre:'Fruits Basket',
    temporada: 2
  },
  { 
    nombre:'Sono Bisque Doll',
    temporada: 1
  }
  ];
  
  nuevo: SeriesAnime = {
    nombre: 'Horimiya',
    temporada: 2
  };

  addNewSerie(argument:SeriesAnime){
    console.log(argument);
    
    this.seriesAnime.push(argument);
    
  }

}
