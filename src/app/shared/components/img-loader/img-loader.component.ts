import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss']
})
export class ImgLoaderComponent{

  @Input()
  src: string;

  @Input()
  imgClass: string;

  @Input()
  hasLoader: boolean = true;

  loaded: boolean;

  constructor() { }

}
