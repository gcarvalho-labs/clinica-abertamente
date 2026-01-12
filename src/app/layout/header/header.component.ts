import { Component, HostListener, Input } from '@angular/core';
import { NgForOf, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() items: { name: string }[] = [];
  @Input() logo!: { src: string; alt: string };
  @Input() button!: { name: string };

  activeIndex = 0;
  isMobile = window.innerWidth <= 991;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  onItemClick(index: number): void {
    this.activeIndex = index;
  }
}
