import { Component, HostListener, Input } from '@angular/core';
import {
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
} from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

interface Column {
  title: string;
  description?: string;
  listStyle?: string;
  items: {
    type: string;
    src?: string;
    alt?: string;
    href?: string;
    text?: string;
  }[];
}

@Component({
  selector: 'app-footer',
  imports: [NgForOf, NgIf, NgSwitchCase, NgClass, NgSwitch, AccordionComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isMobile = window.innerWidth <= 1199;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 1199;
  }

  columns: Column[] = [
    {
      title: 'Clínica Abertamente',
      description:
        'Oferecemos apoio emocional com dedicação, profissionalismo e acolhimento ao longo de toda a sua jornada pessoal.',
      listStyle: 'row',
      items: [
        { type: 'image', src: '', alt: 'icon1' },
        { type: 'image', src: '', alt: 'icon2' },
        { type: 'image', src: '', alt: 'icon3' },
        { type: 'image', src: '', alt: 'icon4' },
        { type: 'image', src: '', alt: 'icon5' },
      ],
    },
    {
      title: 'Pagamento',
      listStyle: 'grid',
      items: [
        {
          type: 'image',
          src: 'images/payments/amex.svg',
          alt: 'amex',
        },
        {
          type: 'image',
          src: 'images/payments/dinners.svg',
          alt: 'dinners',
        },
        {
          type: 'image',
          src: 'images/payments/elo.svg',
          alt: 'elo',
        },
        {
          type: 'image',
          src: 'images/payments/hipercard.svg',
          alt: 'hipercard',
        },
        {
          type: 'image',
          src: 'images/payments/mastercard.svg',
          alt: 'mastercard',
        },
        {
          type: 'image',
          src: 'images/payments/mercado-pago.svg',
          alt: 'mercado pago',
        },
        {
          type: 'image',
          src: 'images/payments/pix.svg',
          alt: 'pix',
        },
      ],
    },
    {
      title: 'Navegação',
      items: [
        { type: 'link', text: 'Início', href: '' },
        { type: 'link', text: 'Serviços', href: '' },
        { type: 'link', text: 'Espaço', href: '' },
        { type: 'link', text: 'Equipe', href: '' },
        { type: 'link', text: 'Metodologia', href: '' },
        { type: 'link', text: 'Localização', href: '' },
        { type: 'link', text: 'Nosso blog', href: '' },
      ],
    },
    {
      title: 'Contato',
      items: [
        { type: 'text', text: '(43) 3337-7793' },
        { type: 'text', text: 'oi@clinicaabertamente.com.br' },
        {
          type: 'text',
          text: 'R. Belo Horizonte, 1558 - Centro, Londrina - PR, 86020-061',
        },
        { type: 'text', text: 'Segunda à Sexta das 8:00 às 21:00' },
      ],
    },
  ];
}
