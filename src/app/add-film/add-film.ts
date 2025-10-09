import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  imports: [FormsModule],
  templateUrl: './add-film.html',
  styleUrl: './add-film.css'
})
export class AddFilm  implements OnInit{

  //newFilm! : Film; 
  newFilm = new Film(); 

  constructor(private filmService : FilmService,
              private router : Router
  )
  {

  }

  ngOnInit(): void {
    
  }

  addFilm()
  {
    //console.log(this.newFilm); 
    this.filmService.ajouterFilm(this.newFilm); 
    //this.message="le film "+this.newFilm.nom+" a été ajouté a votre TUDUM-LIST";
    this.router.navigate(['films']);
  }

}
