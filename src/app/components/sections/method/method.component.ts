import { Component } from '@angular/core';
import {StepperComponent} from '../../stepper/stepper.component';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
  imports: [StepperComponent],
})
export class MethodComponent {
  steps = [
    { title: 'Converse conosco', description: 'Está pronto para dar o primeiro passo rumo ao seu bem-estar emocional? ' +
        'Aqui, sua jornada começa com uma conversa acolhedora e transformadora. Nossa equipe está\n' +
        'a disposição para ouvir você, entender suas necessidades e oferecer suporte inicial\n' +
        'em um ambiente seguro e livre de julgamentos. Seja qual for a sua preocupação,\n' +
        'estamos aqui para ajudar você a se sentir ouvido, compreendido e pronto para seguir\n' +
        'em frente. Vamos começar essa jornada juntos?' },
    {
      title: 'Encontre seu psicólogo ideal',
      description: 'Encontrar o profissional certo pode fazer toda a diferença na sua experiência\n' +
        'terapêutica. É por isso que nos dedicamos a conectar você ao psicólogo que melhor\n' +
        'atende às suas necessidades. Levamos em conta suas preferências, seja em relação à\n' +
        'abordagem terapêutica, especialidade ou até mesmo disponibilidade. Nosso objetivo\n' +
        'é garantir que você se sinta confortável e confiante com sua escolha, pois\n' +
        'acreditamos que um vinculo positivo é essencial para o sucesso do tratamento.',
    },
    { title: 'Agende seu horário', description: 'A terapia deve se ajustar à sua rotina, não o contrário. ' +
        'Por isso, oferecemos um processo de agendamento simples e flexível, para que você escolha o horário mais\n' +
        'conveniente para suas sessões. Com apenas alguns cliques, você estará um passo\n' +
        'mais perto de transformar sua vida. Escolha o momento que melhor combina com seu\n' +
        'ritmo e aproveite para priorizar seu bem-estar com conforto e praticidade.' },
    {
      title: 'Sessão de acolhimento e avaliação',
      description: 'A sua primeira sessão é um momento especial. Aqui, você será recebido com empatia\n' +
        'por um psicólogo qualificado, que realizará uma avaliação inicial para entender suas\n' +
        'demandas de maneira personalizada. Esse encontro é a base para construirmos um\n' +
        'plano terapêutico que faça sentido para você. É o início de uma jornada de\n' +
        'autodescoberta e cuidado, sempre com foco nas suas metas e necessidades.',
    },
    {
      title: 'Início do processo terapêutico',
      description: 'A terapia é uma experiência transformadora e única. A partir do plano traçado, você\n' +
        'iniciará suas sessões regulares, que são pensadas para ajudá-lo a explorar emoções,\n' +
        'superar desafios e alcançar seus objetivos. Cada encontro é uma oportunidade de\n' +
        'aprendizado e crescimento pessoal, em um ambiente onde você se sentirá apoiado e\n' +
        'respeitado. Este é o seu momento de se reconectar consigo mesmo e trilhar o\n' +
        'caminho para uma vida mais plena.'
    },
    {
      title: 'Acompanhamento contínuo e evolução',
      description: 'A terapia é um processo de crescimento constante, e estaremos com você em cada\n' +
        'etapa. Conforme você avança, ajustamos a abordagem para mantê-la alinhada às\n' +
        'suas necessidades. Celebramos suas conquistas e garantimos que você tenha o\n' +
        'suporte necessário para seguir evoluindo de forma duradoura.',
    },
    {
      title: 'Alta e encerramento',
      description: 'Quando você estiver pronto, finalizamos a terapia com uma avaliação do seu\n' +
        'progresso. Este é o momento de celebrar suas conquistas e consolidar as ferramentas\n' +
        'adquiridas para seguir em frente com autonomia.',
    },
  ];

  activeStepIndex: number = -1; // Nenhum ativo no início

  onStepActivated(index: number) {
    this.activeStepIndex = index; // Atualiza o step visível corretamente
  }
}
