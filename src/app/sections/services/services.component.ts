import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ServiceComponent } from '../../components/cards/service/service.component';

@Component({
  selector: 'app-services',
  imports: [NgForOf, ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = [
    {
      title: 'Psicoterapia Individual',
      description:
        'Atendimento personalizado para ajudar a lidar com desafios emocionais, ansiedade e autoconhecimento.',
      subtitle: 'Ler mais >',
      icon: 'fa-solid fa-user',
    },
    {
      title: 'Terapia de Casal',
      description:
        'Fortaleça sua relação com apoio profissional para comunicação, resolução de conflitos e reconexão emocional.',
      subtitle: 'Ler mais >',
      icon: 'fa-solid fa-people-arrows' ,
    },
    {
      title: 'Psicoterapia Online',
      description:
        'Sessões terapêuticas acessíveis de qualquer lugar, garantindo suporte emocional com flexibilidade e comodidade.',
      subtitle: 'Ler mais >',
      icon:  'fa-solid fa-laptop' ,
    },
    {
      title: 'Orientação Vocacional',
      description:
        'Descubra sua vocação com testes e aconselhamento profissional para uma escolha de carreira mais assertiva.',
      subtitle: 'Ler mais >',
      icon: 'fa-solid fa-compass' ,
    },
    {
      title: 'Psicopedagogia',
      description:
        'Apoio especializado para superar dificuldades de aprendizagem e melhorar o desempenho acadêmico.',
      subtitle: 'Ler mais >',
      icon:  'fa-solid fa-book-open-reader' ,
    },
    {
      title: 'Terapia Infantil',
      description:
        'Acompanhamento terapêutico para ajudar crianças a lidarem com emoções, comportamento e relações sociais.',
      subtitle: 'Ler mais >',
      icon: 'fa-solid fa-child-reaching' ,
    },
  ];
}
