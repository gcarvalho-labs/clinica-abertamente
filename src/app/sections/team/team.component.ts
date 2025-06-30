import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MemberComponent } from '../../components/cards/member/member.component';

@Component({
  selector: 'app-team',
  imports: [NgForOf, MemberComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  team = [
    {
      name: 'Kawana Reis',
      about: 'Especialista em TCC, ajuda no controle da ansiedade e emoções.',
      photo: {
        src: 'images/members/member1.webp',
        alt: 'Foto do Membro 1',
      },
      networks: ['', '', '', ''],
    },
    {
      name: 'Luana Martins',
      about: 'Psicóloga infantil e juvenil, atua no desenvolvimento emocional.',
      photo: {
        src: 'images/members/member2.webp',
        alt: 'Foto do Membro 2',
      },
      networks: ['', '', '', ''],
    },
    {
      name: 'Mariana Silveira',
      about: 'Oferece apoio emocional para promover equilíbrio e bem-estar.',
      photo: {
        src: 'images/members/member3.webp',
        alt: 'Foto do Membro 3',
      },
      networks: ['', '', '', ''],
    },
    {
      name: 'Maria Leticia',
      about: 'Foca em autoconhecimento, autoestima e desenvolvimento pessoal.',
      photo: {
        src: 'images/members/member4.webp',
        alt: 'Foto do Membro 4',
      },
      networks: ['', '', '', ''],
    },
    {
      name: 'Layana Costa',
      about:
        'Especialista em Terapia Sistêmica e vínculos familiares saudáveis.',
      photo: {
        src: 'images/members/member5.webp',
        alt: 'Foto do Membro 5',
      },
      networks: ['', '', '', ''],
    },
  ];
}
