import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { ServiceComponent } from '../../cards/service/service.component';

@Component({
  selector: 'app-services',
  imports: [NgForOf, ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = [
    {
      title: 'Nossos serviços',
      description:
        'Atendimento especializado para promover equilíbrio emocional e bem-estar, ajudando você a viver com mais leveza e propósito.',
      subtitle: 'Vamos conversar',
      type: 'neutral',
    },
    {
      title: 'Psicoterapia Individual',
      description:
        'Atendimento personalizado para ajudar a lidar com desafios emocionais, ansiedade e autoconhecimento.',
      subtitle: 'Leia mais',
      type: 'emphasis',
    },
    {
      title: 'Terapia de Casal',
      description:
        'Fortaleça sua relação com apoio profissional para comunicação, resolução de conflitos e reconexão emocional.',
      subtitle: 'Leia mais',
      type: 'default',
    },
    {
      title: 'Psicoterapia Online',
      description:
        'Sessões terapêuticas acessíveis de qualquer lugar, garantindo suporte emocional com flexibilidade e comodidade.',
      subtitle: 'Leia mais',
      type: 'default',
    },
    {
      title: 'Orientação Vocacional',
      description:
        'Descubra sua vocação com testes e aconselhamento profissional para uma escolha de carreira mais assertiva.',
      subtitle: 'Leia mais',
      type: 'default',
    },
    {
      title: 'Psicopedagogia',
      description:
        'Apoio especializado para superar dificuldades de aprendizagem e melhorar o desempenho acadêmico.',
      subtitle: 'Leia mais',
      type: 'default',
    },
  ];
}
