import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
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
      title: 'Psicoterapia Individual',
      description:
        'Atendimento personalizado para ajudar a lidar com desafios emocionais, ansiedade e autoconhecimento.',
      subtitle: 'Leia mais',
      vClass: 'emphasis',
    },
    {
      title: 'Terapia de Casal',
      description:
        'Fortaleça sua relação com apoio profissional para comunicação, resolução de conflitos e reconexão emocional.',
      subtitle: 'Leia mais',
      vClass: null,
    },
    {
      title: 'Psicoterapia Online',
      description:
        'Sessões terapêuticas acessíveis de qualquer lugar, garantindo suporte emocional com flexibilidade e comodidade.',
      subtitle: 'Leia mais',
      vClass: null,
    },
    {
      title: 'Orientação Vocacional',
      description:
        'Descubra sua vocação com testes e aconselhamento profissional para uma escolha de carreira mais assertiva.',
      subtitle: 'Leia mais',
      vClass: null,
    },
    {
      title: 'Psicopedagogia',
      description:
        'Apoio especializado para superar dificuldades de aprendizagem e melhorar o desempenho acadêmico.',
      subtitle: 'Leia mais',
      vClass: null,
    },
  ];
}
