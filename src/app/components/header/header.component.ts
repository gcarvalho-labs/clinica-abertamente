import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    {
      vClasses: ['header__item--left'],
      link: { label: 'Logo', vClasses: [] },
    },

    {
      vClasses: [],
      link: { label: 'Serviço', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Espaço', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Equipe', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Metodologia', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Sobre', vClasses: [] },
    },
    {
      vClasses: ['header__item--right'],
      link: { label: 'Lúmen', vClasses: ['header__link--emphasis'] },
    },
  ];
}
