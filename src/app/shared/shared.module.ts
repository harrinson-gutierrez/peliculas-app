import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardItemDirective } from './components/scrolling-container/directives/card-item.directive';
import { ScrollingContainerComponent } from './components/scrolling-container/scrolling-container.component';

@NgModule({
  imports: [CommonModule],
  declarations:
   [
    ScrollingContainerComponent, 
    CardItemDirective
  ],
  exports:
  [
    ScrollingContainerComponent, 
    CardItemDirective
  ],
  providers: []
})
export class SharedModule { }
