import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  elements = [
    {
      class: 'space__element-image',
      type: 'image',
      src: 'caminho-da-imagem.jpg',
      alt: 'img1',
    },
    {
      class: 'space__element-info',
      type: 'info',
      title: 'Título do Bloco',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry, ' +
        'Lorem Ipsum has been, the industry standard dummy.',
      link: 'Mais sobre',
    },
    {
      class: 'space__element-image',
      type: 'image',
      src: '...',
      alt: 'img2',
    },
    {
      class: 'space__element-info',
      type: 'info',
      title: 'Título do Bloco',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry, ' +
        'Lorem Ipsum has been, the industry standard dummy.',
      link: 'Mais sobre',
    },
    {
      class: 'space__element-info',
      type: 'info',
      title: 'Título do Bloco',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry, ' +
        'Lorem Ipsum has been, the industry standard dummy.',
      link: 'Mais sobre',
    },
    {
      class: 'space__element-image',
      type: 'image',
      src: '/images/spaces/gallery-05.jpg',
      alt: 'img3',
    },
    {
      class: 'space__element-info',
      type: 'info',
      title: 'Título do Bloco',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry, ' +
        'Lorem Ipsum has been, the industry standard dummy.',
      link: 'Mais sobre',
    },
    {
      class: 'space__element-image',
      type: 'image',
      src: '...',
      alt: 'img4',
    },
  ];
}
