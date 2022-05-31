import { Component, Input } from '@angular/core';
import { SeriesAnime } from '../interfaces/animes.interface';
import { Wanimeservice } from '../services/wanine.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent  {

  // @Input() seriesAnimePadre:SeriesAnime[] = [];
get seriesanime(){
  return this.wanimeservice.seriesAnime;
}

  constructor(private wanimeservice:Wanimeservice){

  }

}
