import { Component, HostListener } from '@angular/core';
import { RevealOnScrollDirective } from '../../diretives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isMobile = window.innerWidth <= 991;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }
}
