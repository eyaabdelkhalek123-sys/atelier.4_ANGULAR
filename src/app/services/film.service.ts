import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films! : Film[]; //un tableau de films
  genres! : Genre[];

  constructor()
  {
    this.genres = [
      {idgen : 1 , nomgen : "Rom-Com"},
      {idgen : 2 , nomgen : "Satire"},
      {idgen : 3 , nomgen : "Horreur"},
      {idgen : 4 , nomgen : "Docufiction"},
      {idgen : 5 , nomgen : "Thriller"}
      
    ]

    this.films=[
      {id : 20 ,nom : "20st Century Girl" , genre : {idgen : 1 , nomgen : "Rom-Com"} , datesortie : new Date("10/02/2022") , rating : 7.4},
      {id : 7 ,nom : "The Voice of Hind Rajab" , genre : {idgen : 4 , nomgen : "Docufiction"} , datesortie : new Date("09/05/2025") , rating : 8.1},
      {id : 3 ,nom : "The Conjuring" , genre : {idgen : 3 , nomgen : "Horreur"} , datesortie : new Date("07/19/2013") , rating : 6.8},
      {id : 212 ,nom : "The Platform" , genre : {idgen : 5 , nomgen : "Thriller"} , datesortie : new Date("03/20/2019") , rating : 7},
      
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
      return this.films.find(f => f.id == id)!; 
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

    listeGenres():Genre[] 
    { 
      return this.genres; 
    } 

    consulterGenre(id:number): Genre
    {     
          return this.genres.find(gen => gen.idgen  == id)!; 
    } 
}