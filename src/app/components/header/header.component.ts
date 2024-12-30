import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgForOf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isToggled = false;
  @Output() toggleDrawer = new EventEmitter<void>();

  menus = [
    { name: 'Início', link: '#' },
    { name: 'Serviços', link: '#' },
    { name: 'Equipe', link: '#' },
    { name: 'Metodologia', link: '#' },
    { name: 'Localização', link: '#' },
  ];

  //Propriedades Calculadas
  get firstLineWidth(): number {
    return this.isToggled ? 16 : 28;
  }

  get secondLineWidth(): number {
    return this.isToggled ? 28 : 16;
  }

  get toggleBgColor(): string {
    return this.isToggled ? '#75fb91' : '#e5e4de';
  }

  toggleMenuState(): void {
    this.isToggled = !this.isToggled;
    this.notifyDrawer();
  }

  notifyDrawer() {
    this.toggleDrawer.emit();
  }
}
