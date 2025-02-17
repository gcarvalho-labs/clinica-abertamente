import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Itens de menu:

  items = [
    { name: 'Logo', link: '#', type: 'logo', emphasis: false },
    { name: 'Início', link: '#', type: 'default', emphasis: false },
    { name: 'Serviços', link: '#', type: 'default', emphasis: false },
    { name: 'Equipe', link: '#', type: 'default', emphasis: false },
    { name: 'Metodologia', link: '#', type: 'default', emphasis: false },
    { name: 'Localização', link: '#', type: 'default', emphasis: false },
    { name: 'Nosso Blog', link: '#', type: 'default', emphasis: true },
  ];

  // Modo mobile:
  isMobile = window.innerWidth <= 991;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  // Drawer:
  @Output() toggleDrawer = new EventEmitter<void>();

  toggleButton() {
    this.toggleDrawer.emit();
    this.isDrawerActive = !this.isDrawerActive;
  }
  isDrawerActive = false;
}
