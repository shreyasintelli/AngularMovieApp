import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(
        movies => {
          this.movies = movies;
          console.log('Movies:', movies); // Log the response here
        },
        error => {
          console.error('Error fetching movies:', error);
        }
      );
  }

}
