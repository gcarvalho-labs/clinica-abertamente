import { Component } from '@angular/core';
import { NgClass, NgForOf, NgStyle } from '@angular/common';
import { ServiceComponent } from '../../cards/service/service.component';

@Component({
  selector: 'app-space',
  imports: [NgForOf, NgClass, NgStyle],
  templateUrl: './space.component.html',
  styleUrl: './space.component.scss',
})
export class SpaceComponent {
  features = [
    {
      icon: 'fa-seedling',
      title: 'Ambiente Acolhedor',
      text: 'Um espaço planejado para transmitir tranquilidade, conforto e conexão com a natureza desde a chegada.',
    },
    {
      icon: 'fa-user-md',
      title: 'Estrutura Profissional',
      text: 'Ambientes bem equipados para garantir atendimentos terapêuticos com privacidade, segurança e eficiência.',
    },
    {
      icon: 'fa-child',
      title: 'Espaço Infantil',
      text: 'Espaços adaptados para o atendimento de crianças, com brinquedos terapêuticos e atmosfera lúdica.',
    },
  ];
  images = [
    { src: 'assets/imagem1.jpg', alt: 'Descrição da imagem 1' },
    { src: 'assets/imagem2.jpg', alt: 'Descrição da imagem 2' },
    { src: 'assets/imagem3.jpg', alt: 'Descrição da imagem 3' },
    { src: 'assets/imagem4.jpg', alt: 'Descrição da imagem 4' },
  ];
}
