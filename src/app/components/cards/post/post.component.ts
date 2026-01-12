import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() image!: string;
  @Input() imageAlt: string = 'Imagem do post';
  @Input() title!: string;
  @Input() description!: string;
  @Input() authorName!: string;
  @Input() authorImage!: {
    src: string;
    alt: string;
  };
  @Input() date!: string;
  @Input() readTime!: string;
  @Input() author!: string;
}
