import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [ToggleButtonComponent, NgIf, NgForOf],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items = [
    { name: 'Logo', link: '#' },
    { name: 'Início', link: '#' },
    { name: 'Serviços', link: '#' },
    { name: 'Equipe', link: '#' },
    { name: 'Metodologia', link: '#' },
    { name: 'Localização', link: '#' },
    { name: 'Nosso blog', link: '#' },
  ];

  isMobile = window.innerWidth <= 991;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  @Output() toggleDrawer = new EventEmitter<void>();
  isDrawerActive = false;

  toggleButton() {
    this.toggleDrawer.emit();
    this.isDrawerActive = !this.isDrawerActive;
  }
}
