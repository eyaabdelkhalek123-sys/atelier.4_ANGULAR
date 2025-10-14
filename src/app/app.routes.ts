import { Routes } from '@angular/router';
import { Films } from './films/films';
import { AddFilm } from './add-film/add-film';
import { UpdateFilm } from './update-film/update-film';

export const routes: Routes = [

    {path: "films", component : Films},
    {path: "add-film", component : AddFilm},
    {path: "", redirectTo : "films" , pathMatch : "full"},  //dirrection vers films par defaut 
    {path: "update-film/:id", component : UpdateFilm},

];

