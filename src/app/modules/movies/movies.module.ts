import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { IonicModule } from '@ionic/angular';
import { MoviesRoutingModule } from './movies.routing';
import { MovieComponent } from './components/movie/movie.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [MoviesComponent, MovieComponent],
  exports: [MovieComponent]
})
export class MoviesModule { }
