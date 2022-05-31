import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SeriesAnime } from '../interfaces/animes.interface';
import { Wanimeservice } from '../services/wanine.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  

  @Input() nuevo: SeriesAnime = {
    nombre: '',
    temporada: 0,
  };

  // @Output() onNewSerie: EventEmitter<SeriesAnime> = new EventEmitter();

constructor(private wanimeserie: Wanimeservice){}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.wanimeserie.addSeries(this.nuevo)
    // this.onNewSerie.emit(this.nuevo);
    this.nuevo = {nombre:'', temporada:0}
   
    
  }

}
