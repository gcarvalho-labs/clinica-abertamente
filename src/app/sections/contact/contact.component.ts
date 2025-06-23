import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [NgClass, NgForOf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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

  contactDetails = [
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
      desc: 'Segunda a Sexta: 08:00–21:00',
    },
  ];
}

