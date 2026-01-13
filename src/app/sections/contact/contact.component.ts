import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [NgClass, NgForOf, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  isMobile = false;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    this.isMobile = window.innerWidth <= 991;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  facilities = [
    {
      icon: 'fas fa-parking',
      title: 'Estacionamento gratuito',
      desc: '',
    },
    {
      icon: 'fas fa-wheelchair',
      title: 'Área totalmente acessível',
      desc: '',
    },
    {
      icon: 'fas fa-bus',
      title: 'Transporte público próximo',
      desc: '',
    },
  ];

  details = [
    {
      icon: 'fas fa-phone',
      title: 'Telefone',
      desc: '(43) 3337-7793',
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mail',
      desc: 'contato@clinicaabertamente.com',
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Endereço',
      desc: 'R. Belo Horizonte, 1558 - Centro, Londrina - PR, 86020-061',
    },
    {
      icon: 'fas fa-clock',
      title: 'Horário',
      desc: 'Segunda a Sexta: 08:00–21:00 <br> sábado 08:00–14:00',
    },
  ];
}
