import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { StepperComponent } from '../../stepper/stepper.component';

@Component({
  selector: 'app-place',
  imports: [NgForOf, StepperComponent],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  images = [
    { src: '/images/places/photo01.jpg', alt: 'Foto do ambiente 1' },
    { src: '/images/places/photo02.jpg', alt: 'Foto do ambiente 2' },
    { src: '/images/places/photo03.jpg', alt: 'Foto do ambiente 3' },
    { src: '/images/places/photo04.jpg', alt: 'Foto do ambiente 4' },
    { src: '/images/places/photo05.jpeg', alt: 'Foto do ambiente 5' },
  ];

  steps = [
    {
      title: 'Acolhimento',
      description: 'Primeiro contato e escuta empática',
    },
    {
      title: 'Avaliação',
      description:
        'Análise das necessidades individuais',
    },
    {
      title: 'Planejamento',
      description:
        'Definição do plano terapêutico',
    },
  ];
}
