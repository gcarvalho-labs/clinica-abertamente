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
      title: 'Ambiente acolhedor',
      description:
        'Nosso espaço foi cuidadosamente planejado para proporcionar conforto, acolhimento e privacidade — elementos essenciais para o cuidado com a saúde mental.',
    },
    {
      title: 'Sem custos adicionais',
      description:
        'Oferecemos uma estrutura completa, sem taxas extras, para garantir que você possa focar totalmente no seu processo terapêutico com tranquilidade.',
    },
    {
      title: 'Fácil acesso',
      description:
        'Localizado em uma região central e acessível, nosso espaço proporciona segurança e bem-estar desde o primeiro contato.',
    },
  ];
}
