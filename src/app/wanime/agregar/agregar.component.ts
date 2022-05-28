import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SeriesAnime } from '../interfaces/animes.interface';

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

  @Output() onNewSerie: EventEmitter<SeriesAnime> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.onNewSerie.emit(this.nuevo);
    this.nuevo = {nombre:'', temporada:0}
   
    
  }

}
