import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AnimeComponent } from "./anime/anime.component";
import { ListadoComponent } from "./listado/listado/listado.component";


@NgModule({
    declarations:[
        AnimeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports: [
        CommonModule,
    ]
    
})
export class animesModule{

}