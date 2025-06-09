import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
  imports: [NgForOf, NgClass],
})
export class MethodComponent {
  steps = [
    {
      title: 'Converse conosco',
      description:
        'Entre em contato para entender suas necessidades e esclarecer dúvidas.',
      image: {src: '/images/undraw_chatting_5u5z.svg', alt: 'img1'},
      vClass: 'stepper__step--left',
    },
    {
      title: 'Agende um horário',
      description:
        'Escolha o melhor dia e horário para iniciar seu atendimento.',
      image: {src: '/images/undraw_schedule_6t8k.svg', alt: 'img1'},
      vClass: 'stepper__step--right',
    },
    {
      title: 'Escolha o seu profissional',
      description:
        'Selecione o especialista que melhor se adapta ao seu perfil.',
      image: {src: '...', alt: 'img1'},
      vClass: 'stepper__step--left',
    },
    {
      title: 'Inicie o seu processo',
      description:
        'Comece sua jornada com um plano personalizado de acompanhamento.',
      image: {src: '...', alt: 'img1'},
      vClass: 'stepper__step--right',
    },
    {
      title: 'Acompanhe a sua evolução',
      description: 'Monitore os avanços e ajustes ao longo do processo.',
      image: {src: '...', alt: 'img1'},
      vClass: 'stepper__step--left',
    },
    {
      title: 'Conclua com alta',
      description:
        'Finalize o processo com segurança e orientação para o futuro.',
      image: {src: '...', alt: 'img1'},
      vClass: 'stepper__step--right',
    },
  ];
}
