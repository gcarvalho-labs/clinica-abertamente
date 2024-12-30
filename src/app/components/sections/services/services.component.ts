import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [NgForOf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = [
    {
      title: 'Terapia de Casal',
      description: 'Espaço neutro para diálogo, promovendo entendimento e soluções para conflitos no relacionamento.'
    },
    {
      title: 'Psicoterapia Online',
      description: 'Atendimento psicológico virtual, com flexibilidade e acessibilidade para cuidar da sua saúde mental.'
    },
    {
      title: 'Orientação Vocacional',
      description: 'Suporte especializado para decisões de carreira, ajudando a alinhar objetivos e escolhas pessoais.'
    },
    {
      title: 'Psicopedagogia',
      description: 'Apoio a crianças e adolescentes com dificuldades de aprendizagem, promovendo desenvolvimento.'
    }
  ];

}
