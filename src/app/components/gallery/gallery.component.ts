import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() image1!: { src: string; alt: string };
  @Input() image2!: { src: string; alt: string };
  @Input() image3!: { src: string; alt: string };
  @Input() image4!: { src: string; alt: string };
  @Input() image5!: { src: string; alt: string };
  @Input() image6!: { src: string; alt: string };
}
