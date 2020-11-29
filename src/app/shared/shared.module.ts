import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImgLoaderComponent } from './components/img-loader/img-loader.component';
import { RatingComponent } from './components/rating/rating.component';
import { CardItemDirective } from './components/scrolling-container/directives/card-item.directive';
import { ScrollingContainerComponent } from './components/scrolling-container/scrolling-container.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations:
   [
    ScrollingContainerComponent, 
    CardItemDirective,
    ImgLoaderComponent,
    RatingComponent
  ],
  exports:
  [
    ScrollingContainerComponent, 
    CardItemDirective,
    ImgLoaderComponent,
    RatingComponent
  ],
  providers: []
})
export class SharedModule { }
