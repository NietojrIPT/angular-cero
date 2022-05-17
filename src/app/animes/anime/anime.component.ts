import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {
serie: string = "Horimiya";
temporada:number = 1;

get nombCapitalizado(){
  return this.serie.toLocaleUpperCase();
}

obtenerNombre():string {
  return `${this.serie} - ${this.temporada}`;
}

cambSerie():void{
  this.serie = '3d Kanojo';
}

cambTemporada():void{
  this.temporada = 2;
}

}
