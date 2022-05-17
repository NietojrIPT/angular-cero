import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 animes: string[] = [
   'Demon Slayer',
   'Komi-san',
   'Darwins Game',
   'Food Wars',
   'Violet Evergarden',
   'Sono Bisque Doll',
   'Fruits Basket',
   'Spy x Family'
 ]    

 animeBorrado:string = '';


 borrarAnime(){
  this.animeBorrado =  this.animes.shift() || '';
 }

}
