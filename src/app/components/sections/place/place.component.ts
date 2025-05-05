import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-place',
  imports: [NgForOf],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  places = [
    { url: '/images/places/photo01.jpg', alt: 'Foto do ambiente 1' },
    { url: '/images/places/photo02.jpg', alt: 'Foto do ambiente 2' },
    { url: '/images/places/photo03.jpg', alt: 'Foto do ambiente 3' },
    { url: '/images/places/photo04.jpg', alt: 'Foto do ambiente 4' },
    { url: '/images/places/photo05.jpeg', alt: 'Foto do ambiente 5' },
  ];
  steps = [
    {
      title: 'Ambiente acolhedor',
      description:
        'Nosso espaço foi cuidadosamente planejado para proporcionar conforto, acolhimento e privacidade — elementos essenciais para o cuidado com a saúde mental.'
    },
    {
      title: 'Sem custos adicionais',
      description:
        'Oferecemos uma estrutura completa, sem taxas extras, para garantir que você possa focar totalmente no seu processo terapêutico com tranquilidade.'
    },
    {
      title: 'Fácil acesso',
      description:
        'Localizado em uma região central e acessível, nosso espaço proporciona segurança e bem-estar desde o primeiro contato.'
    }
  ];

  activeStepIndex = 0;

  nextStep() {
    if (this.activeStepIndex < this.steps.length - 1) {
      this.activeStepIndex++;
    }
  }

  previousStep() {
    if (this.activeStepIndex > 0) {
      this.activeStepIndex--;
    }
  }

  setStep(index: number) {
    this.activeStepIndex = index;
  }
}
