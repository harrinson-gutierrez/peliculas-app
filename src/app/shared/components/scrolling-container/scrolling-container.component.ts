import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Pagination, PaginationList, PaginationUtil } from 'src/app/data/models/util/paginated';
import { CardItemDirective } from './directives/card-item.directive';

@Component({
  selector: 'app-scrolling-container',
  templateUrl: './scrolling-container.component.html',
  styleUrls: ['./scrolling-container.component.scss']
})
export class ScrollingContainerComponent implements OnInit, OnChanges {

  /**
   * Elementos para iterar
   */
  @Input()
  items: any[];

  @Input()
  pagination: Pagination;

  private itemsPaginated: PaginationList<any>;


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

  ngOnInit(): void {

    if (!this.pagination)
      this.pagination = { page: 1, size: 5 };
      
    this.itemsPaginated = PaginationUtil.Pagination<any>(this.items, this.pagination);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.pagination)
      this.pagination = { page: 1, size: 5 };
    this.itemsPaginated = PaginationUtil.Pagination<any>(this.items, this.pagination);
  }

  get getItemsPaginted(): PaginationList<any> {
    return this.itemsPaginated;
  }
}
