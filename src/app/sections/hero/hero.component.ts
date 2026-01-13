import { Component, HostListener, OnInit } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit{
  isMobile = false;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    this.isMobile = window.innerWidth <= 991;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }
}
