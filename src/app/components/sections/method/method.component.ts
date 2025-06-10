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
      image: { src: '/images/chat_with_us.svg', alt: 'img1' },
      vClass: 'stepper__step--left',
    },
    {
      title: 'Agende um horário',
      description:
        'Escolha o melhor dia e horário para iniciar seu atendimento.',
      image: { src: '/images/schedule_appointment.svg', alt: 'img2' },
      vClass: 'stepper__step--right',
    },
    {
      title: 'Escolha o seu profissional',
      description:
        'Selecione o especialista que melhor se adapta ao seu perfil.',
      image: { src: '/images/choice_professional.svg', alt: 'img3' },
      vClass: 'stepper__step--left',
    },
    {
      title: 'Inicie o seu processo',
      description:
        'Comece sua jornada com um plano personalizado de acompanhamento.',
      image: { src: '/images/start_process.svg', alt: 'img4' },
      vClass: 'stepper__step--right',
    },
    {
      title: 'Evolua no seu ritmo',
      description:
        'Com o apoio do seu psicólogo, você irá perceber conquistas e ' +
        'avanços no seu tempo, construindo bem-estar e autoconhecimento.',
      image: { src: '/images/evolve_calmly.svg', alt: 'img5' },
      vClass: 'stepper__step--left',
    },
    {
      title: 'Sinta-se preparado para seguir',
      description:
        'Ao final do processo, você se sentirá mais fortalecido para ' +
        'encarar os desafios da vida com autonomia e confiança.',
      image: { src: '/images/feel_ready.svg', alt: 'img6' },
      vClass: 'stepper__step--right',
    },
  ];
}
