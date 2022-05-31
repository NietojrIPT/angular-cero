import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { SeriesAnime } from "../interfaces/animes.interface";

@Injectable()

export class Wanimeservice{

   private _seriesAnime:SeriesAnime[] = [
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

    get seriesAnime(): SeriesAnime[]{
        return [...this._seriesAnime];
    }
   
   constructor(){
       console.log('Servicio inicializado');
   }

   addSeries(serie:SeriesAnime){
       this._seriesAnime.push(serie);
   }
    

}