import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MoviesService } from './services/movies.service';

@NgModule({
  imports:[
    HttpClientModule
  ],
  providers: [MoviesService]
})
export class CoreModule { }
