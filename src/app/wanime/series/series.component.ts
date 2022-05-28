import { Component, Input, OnInit } from '@angular/core';
import { SeriesAnime } from '../interfaces/animes.interface';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent  {

  @Input() seriesAnimePadre:SeriesAnime[] = [];

}
