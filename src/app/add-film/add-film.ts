import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { Route, Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-film',
  imports: [FormsModule],
  templateUrl: './add-film.html',
  styleUrl: './add-film.css'
})
export class AddFilm  implements OnInit{

  //newFilm! : Film; 
  newFilm = new Film(); 

  genres! : Genre[];
  newIdgenre! :number;
  newGenre! : Genre;

  constructor(private filmService : FilmService,
              private router : Router) {}

  ngOnInit(): void {
    
    this.genres = this.filmService.listeGenres();
  }

  addFilm()
  {

    this.newGenre = this.filmService.consulterGenre(this.newIdgenre);
     this.newFilm.genre = this.newGenre; 
    this.filmService.ajouterFilm(this.newFilm); 
    //this.message="le film "+this.newFilm.nom+" a été ajouté a votre TUDUM-LIST";
    this.router.navigate(['films']);

    console.log(this.newFilm); 
  }

}