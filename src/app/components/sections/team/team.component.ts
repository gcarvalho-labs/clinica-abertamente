import { Component } from '@angular/core';
import {  NgForOf } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgForOf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  team = [
    {
      title: 'Kawana',
      description:
        'Especialista em Terapia Cognitivo-Comportamental, auxilia no manejo da ansiedade e na mudança de padrões emocionais.',
      image: {
        src: 'images/members/member1.webp',
        alt: 'Foto do Membro 1',
      },
    },
    {
      title: 'Luana',
      description:
        'Psicóloga infantil e do adolescente, ajuda no desenvolvimento emocional e nas relações familiares.',
      image: {
        src: 'images/members/member2.webp',
        alt: 'Foto do Membro 2',
      },
    },

    {
      title: 'Mariana',
      description:
        'Atua no apoio psicológico para desafios emocionais, promovendo equilíbrio e qualidade de vida.',
      image: {
        src: 'images/members/member3.webp',
        alt: 'Foto do Membro 3',
      },
    },
    {
      title: 'Maria Leticia',
      description:
        'Foca no autoconhecimento, na regulação emocional para fortalecimento da autoestima e desenvolvimento pessoal.',
      image: {
        src: 'images/members/member4.webp',
        alt: 'Foto do Membro 4',
      },
    },
    {
      title: 'Layana',
      description:
        'Especialista em Terapia Sistêmica, fortalecicmento das relações familiares e conjugais, e construção de vinculos saudáveis.',
      image: {
        src: 'images/members/member5.webp',
        alt: 'Foto do Membro 5',
      },
    },
  ];
}
