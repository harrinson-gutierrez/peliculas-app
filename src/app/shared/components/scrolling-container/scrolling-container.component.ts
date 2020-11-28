import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { CardItemDirective } from './directives/card-item.directive';

@Component({
  selector: 'app-scrolling-container',
  templateUrl: './scrolling-container.component.html',
  styleUrls: ['./scrolling-container.component.scss']
})
export class ScrollingContainerComponent {

  /**
   * Elementos para iterar
   */
  @Input()
  items: any[] = [];

  /**
   * Forma de visualizar los elementos
   */
  @Input()
  mode: "horizontal" | "vertical" | "grid" = "horizontal";

  /**
   * Referencia a la directiva
   */
  @ContentChild(CardItemDirective, { read: TemplateRef })
  cardItemTemplate: any;

  constructor() { }
}
