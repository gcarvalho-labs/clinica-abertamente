import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, NgClass, NgStyle, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren('btnRefs', { read: ElementRef })
  buttons!: QueryList<ElementRef>;

  activeIndex = 1;
  indicatorOffset = 1;
  indicatorWidth = 0;

  isMobile = window.innerWidth <= 991;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateIndicator(), 0);
  }

  onItemClick(index: number): void {
    this.activeIndex = index;
    this.updateIndicator();
  }

  updateIndicator(): void {
    const button = this.buttons.get(this.activeIndex)?.nativeElement;
    const container = button?.closest('ul');
    if (button && container) {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      this.indicatorOffset = buttonRect.left - containerRect.left;
      this.indicatorWidth = button.offsetWidth;
    }
  }

  items = [
    {
      vClasses: ['header__item--left'],
      link: { label: 'Logo', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Serviço', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Equipe', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Metodologia', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Galeria', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Sobre', vClasses: [] },
    },
    {
      vClasses: [],
      link: { label: 'Blog', vClasses: [] },
    },
    {
      vClasses: ['header__item--right'],
      link: { label: 'Conversar', vClasses: ['header__link--emphasis'] },
    },
  ];
}
