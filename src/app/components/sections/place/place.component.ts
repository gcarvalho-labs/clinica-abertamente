import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';


@Component({
  selector: 'app-place',
  imports: [NgForOf, NgClass],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  images = [
    { src: 'images/places/photo01.jpg', alt: 'Photo 1' },
    { src: 'images/places/photo02.jpg', alt: 'Photo 2' },
    { src: 'images/places/photo03.jpg', alt: 'Photo 3' },
    { src: 'images/places/photo04.jpg', alt: 'Photo 4' },
    { src: 'images/places/photo05.jpg', alt: 'Photo 5' },
    { src: 'images/places/photo06.jpeg', alt: 'Photo 6' },
  ];
  layoutClass = 'place__gallery--layout1'; // classe inicial
  private layouts = ['place__gallery--layout1', 'place__gallery--layout2'];
  private currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.layouts.length;
      this.layoutClass = this.layouts[this.currentIndex];
    }, 5000); // alterna a cada 5 segundos
  }
}
