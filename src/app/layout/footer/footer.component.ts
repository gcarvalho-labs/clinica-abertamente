import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgForOf, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menus = [
    { label: 'Serviço', href: '#' },
    { label: 'Equipe', href: '#' },
    { label: 'Metodologia', href: '#' },
    { label: 'Espaço', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  networks = [
    { href: '#', iconClass: 'fab fa-facebook-f' },
    { href: '#', iconClass: 'fab fa-linkedin-in' },
    { href: '#', iconClass: 'fab fa-x-twitter' },
    { href: '#', iconClass: 'fab fa-instagram' },
  ];
}
