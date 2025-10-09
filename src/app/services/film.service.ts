import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films! : Film[]; //un tableau de films

  constructor()
  {
    this.films=[
      {code : 20 ,nom : "20st Century Girl" , genre : "rom-com" , datesortie : new Date("10/02/2022") , rating : 7.4},
      {code : 7 ,nom : "The Voice of Hind Rajab" , genre : "docufiction" , datesortie : new Date("09/05/2025") , rating : 8.1},
      {code : 3 ,nom : "The Conjuring" , genre : "Horreur" , datesortie : new Date("07/19/2013") , rating : 6.8}
      
    ];
  }

  listeFilm():Film[] { 
      return this.films; 
  } 

   ajouterFilm( prod: Film){ 
      this.films.push(prod); 
  } 

   supprimerFilm( fil: Film) //on cherche la position et on supprime avec slice 
   { 
    const index = this.films.indexOf(fil, 0); 
      if (index > -1) { 
        this.films.splice(index, 1); 
      } 
      //ou Bien 
      /*  this.films.forEach((cur, index) => { 
         if(fil.nom === cur.nom) { 
               this.films.splice(index, 1);   
            } 
      }); */ 
    }

    consulterFilm(id:number): Film
    {     
      return this.films.find(f => f.code == id)!; 
    } 

    updateFilm( fil: Film) 
    { 
      const index = this.films.indexOf(fil, 0); //on cherche la position de film a modifier
      if (index > -1) 
      { 
        this.films.splice(index, 1); //on supprime le film 
        this.films.splice(index,0,fil); //on inserer le new film
      } 
    } 
}
