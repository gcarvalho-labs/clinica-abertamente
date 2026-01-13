import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-spaces',
  imports: [RevealOnScrollDirective],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.scss',
})
export class SpacesComponent {
  spaces = [
    [
      {
        name: 'Sala Adulto 1',
        about:
          'Espaço terapêutico voltado ao acolhimento e escuta em atendimentos individuais.',
        photo: { src: 'images/spaces/space02.png', alt: 'Sala Adulto 1' },
      },
      {
        name: 'Sala Coletiva',
        about:
          'Espaço coletivo para grupos, pensado para favorecer o diálogo e a escuta ativa.',
        photo: { src: 'images/spaces/space06.png', alt: 'Sala Coletiva' },
      },
    ],
    [
      {
        name: 'Acesso Principal',
        about:
          'Já na entrada, um ambiente acolhedor que inspira cuidado, respeito e confiança.',
        photo: { src: 'images/spaces/space05.png', alt: 'Acesso Principal' },
      },
      {
        name: 'Sala Infantil',
        about:
          'Ambiente lúdico e seguro, planejado para terapias com crianças pequenas.',
        photo: { src: 'images/spaces/space01.png', alt: 'Sala Infantil' },
      },
    ],
    [
      {
        name: 'Sala Adulto 2',
        about:
          'Espaço terapêutico também voltado para atendimentos individuais.',
        photo: { src: 'images/spaces/space03.png', alt: 'Sala Adulto 2' },
      },
      {
        name: 'Recepção',
        about:
          'Um ambiente sereno e organizado que acolhe antes das sessões terapêuticas.',
        photo: { src: 'images/spaces/space04.png', alt: 'Recepção' },
      },
    ],
  ];
}
