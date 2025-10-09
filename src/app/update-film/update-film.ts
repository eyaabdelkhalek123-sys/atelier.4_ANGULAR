import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-film',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-film.html',
  styles: ``
})
export class UpdateFilm implements OnInit{

  currentFilm = new Film();

  constructor(private activatedRoute: ActivatedRoute, 
              private router : Router, 
              private filmService: FilmService)
  {

  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['code']);
    this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params['code']); 
    console.log(this.currentFilm);
  }

  updateFilm()
  {
    console.log(this.currentFilm);
    this.filmService.updateFilm(this.currentFilm); 
    this.router.navigate(['films']);
  }

}
