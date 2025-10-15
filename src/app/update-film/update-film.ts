import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-film.html',
  styles: ``
})
export class UpdateFilm implements OnInit{

  currentFilm = new Film();

  genres! : Genre[];
  updateGenId! : number;

  constructor(private activatedRoute: ActivatedRoute, 
              private router : Router, 
              private filmService: FilmService)
  {

  }

  ngOnInit(): void {
    
    this.genres= this.filmService.listeGenres();
    this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']); 
    this.updateGenId=this.currentFilm.genre.idgen;

    console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentFilm);
  }

  updateFilm()
  {
    
    this.currentFilm.genre= this.filmService.consulterGenre(this.updateGenId)
    this.filmService.updateFilm(this.currentFilm); 
    this.router.navigate(['films']);

    console.log(this.currentFilm);
  }

}