import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MoviesServiceMockService } from 'src/app/data/mocks/movies/MoviesServiceMock.service';
import { Movie } from 'src/app/data/models/movie';
import { PaginationList, PaginationUtil } from 'src/app/data/models/util/paginated';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  /**
   * Si el componente esta en busqueda
   */
  isSearching: boolean = false;

  /**
   * Peliculas top 250
   */
  movies250Top: Movie[];

  /**
   * Peliculas populares
   */
  moviesPopular: Movie[];

  /**
  * Busqueda de peliculas
  */
  searchMovies: Movie[];

  /**
   * 
   * @param _moviesService MoviesServices
   * @param _menu Menu
   */
  constructor(private _moviesService: MoviesServiceMockService,
    private _menu: MenuController) { }

  ngOnInit() {
    this.callTopMoviesMoviesPopular();
    this.callMoviesPopular();
  }

  /**
   * Obtiene las peliculas top 250
   */
  callTopMoviesMoviesPopular() {
    this._moviesService.getTop250PopularMovies().subscribe(data => {
      this.movies250Top = data.items;
    }, (error) => {
      console.log(error);
    })
  }

  /**
   * Obtiene las peliculas mas populares
   */
  callMoviesPopular() {
    this._moviesService.getMostPopularMovies().subscribe(data => {
      this.moviesPopular = data.items;
    }, (error) => {
      console.log(error);
    })
  }

  /**
   * Busqueda de peliculas por filtro
   * @param event Evento
   */
  onSearchMovies(event) {
    this._moviesService.getSearchMovie(event.target.value).subscribe(data => {
      this.searchMovies = data.results;
    })
  }

  /**
   * Abrir el menu lateral
   */
  openMenu() {
    this._menu.toggle();
  }

  /**
   * rating in stars
   * @param value 1-10 Value
   */
  getRating(value: number) {
    return ((value * 100) / 10);
  }
}
