import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isToggled = false;

  menus = [
    { name: 'Menu 2', link: '/menu2' },
    { name: 'Menu 3', link: '/menu3' },
    { name: 'Menu 4', link: '/menu4' },
    { name: 'Menu 5', link: '/menu5' },
  ];

  //Propriedades Calculadas

  get firstLineWidth(): number {
    return this.isToggled ? 16 : 28;
  }

  get secondLineWidth(): number {
    return this.isToggled ? 28 : 16;
  }

  get toggleBackgroundColor(): string {
    return this.isToggled ? '#75fb91' : '#e5e4de';
  }

  toggleMenuState(): void {
    this.isToggled = !this.isToggled;
  }
}
