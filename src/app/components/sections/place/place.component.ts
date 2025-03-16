import { Component } from '@angular/core';
import {GalleryComponent} from '../../gallery/gallery.component';


@Component({
  selector: 'app-place',
  imports: [GalleryComponent],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  images = [
    { src: '/images/components/sections/place/photo01.jpg', alt: 'Photo 1' },
    { src: '/images/components/sections/place/photo02.jpg', alt: 'Photo 2' },
    { src: '/images/components/sections/place/photo03.jpg', alt: 'Photo 3' },
    { src: '/images/components/sections/place/photo04.jpg', alt: 'Photo 4' },
    { src: '/images/components/sections/place/photo05.jpg', alt: 'Photo 5' },
    { src: '/images/components/sections/place/photo06.jpeg', alt: 'Photo 6' }
  ];
}
