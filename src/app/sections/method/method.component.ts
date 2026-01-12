import { Component } from '@angular/core';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { RevealOnScrollDirective } from '../../diretives/reveal-on-scroll.directive';

@Component({
  selector: 'app-method',
  imports: [StepperComponent, RevealOnScrollDirective],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss',
})
export class MethodComponent {
  steps = [
    {
      title: 'Converse conosco',
      description:
        'Entre em contato com a nossa equipe para conversar sobre suas necessidades, esclarecer dúvidas e entender como podemos te ajudar da melhor forma.',
      image: { src: 'images/steps/step1.svg', alt: 'img1' },
    },
    {
      title: 'Agende um horário',
      description:
        'Escolha o dia e horário que for mais conveniente para você iniciar seu atendimento com tranquilidade e sem pressa.',
      image: { src: 'images/steps/step2.svg', alt: 'img2' },
    },
    {
      title: 'Escolha um profissional',
      description:
        'Conheça os nossos especialistas e escolha aquele que você sentir mais afinidade, garantindo um atendimento que realmente faça sentido para você.',
      image: { src: 'images/steps/step3.svg', alt: 'img3' },
    },
    {
      title: 'Inicie seu processo',
      description:
        'Dê início à sua jornada com um plano de acompanhamento pensado especialmente para você, respeitando seus objetivos e seu momento.',
      image: { src: 'images/steps/step4.svg', alt: 'img4' },
    },
    {
      title: 'Evolua no seu ritmo',
      description:
        'Com o apoio do seu psicólogo, você irá perceber conquistas e avanços no seu próprio tempo, desenvolvendo bem-estar, autoconhecimento e mais equilíbrio emocional.',
      image: { src: 'images/steps/step5.svg', alt: 'img5' },
    },
    {
      title: 'Esteja preparado para seguir',
      description:
        'Ao final do processo, você se sentirá mais confiante e preparado para lidar com os desafios da vida, com mais clareza, autonomia e equilíbrio.',
      image: { src: 'images/steps/step6.svg', alt: 'img6' },
    },
  ];
}
