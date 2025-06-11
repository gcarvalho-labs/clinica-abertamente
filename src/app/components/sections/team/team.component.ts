import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

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
      description: 'Especialista em TCC, ajuda no controle da ansiedade e emoções.',
      image: {
        src: 'images/members/member1.webp',
        alt: 'Foto do Membro 1',
      },
      networks: [{}, {}, {}, {}]
    },
    {
      title: 'Luana',
      description: 'Psicóloga infantil e juvenil, atua no desenvolvimento emocional.',
      image: {
        src: 'images/members/member2.webp',
        alt: 'Foto do Membro 2',
      },
      networks: [{}, {}, {}, {}]
    },
    {
      title: 'Mariana',
      description: 'Oferece apoio emocional para promover equilíbrio e bem-estar.',
      image: {
        src: 'images/members/member3.webp',
        alt: 'Foto do Membro 3',
      },
      networks: [{}, {}, {}, {}]
    },
    {
      title: 'Maria Leticia',
      description: 'Foca em autoconhecimento, autoestima e desenvolvimento pessoal.',
      image: {
        src: 'images/members/member4.webp',
        alt: 'Foto do Membro 4',
      },
      networks: [{}, {}, {}, {}]
    },
    {
      title: 'Layana',
      description: 'Especialista em Terapia Sistêmica e vínculos familiares saudáveis.',
      image: {
        src: 'images/members/member5.webp',
        alt: 'Foto do Membro 5',
      },
      networks: [{}, {}, {}, {}]
    },
  ];
}
