import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [NgForOf, RouterLink],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() isOpen = false;

  menus = [
    { name: 'Início', link: '#' },
    { name: 'Serviços', link: '#' },
    { name: 'Equipe', link: '#' },
    { name: 'Metodologia', link: '#' },
    { name: 'Localização', link: '#' },
  ];
}
