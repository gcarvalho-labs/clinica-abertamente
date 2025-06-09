import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
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
  indicatorLeft = 0;
  indicatorWidth = 0;

  isMobile = window.innerWidth <= 991;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateIndicator(), 0);
  }

  onItemClick(index: number): void {
    this.activeIndex = index;
    this.updateIndicator();
  }

  updateIndicator(): void {
    requestAnimationFrame(() => {
      const activeBtn = this.buttons.get(this.activeIndex)?.nativeElement;
      const baseBtn = this.buttons.get(1)?.nativeElement;
      if (activeBtn && baseBtn) {
        const activeRect = activeBtn.getBoundingClientRect();
        const baseRect = baseBtn.getBoundingClientRect();
        this.indicatorLeft = activeRect.left - baseRect.left;
        this.indicatorWidth = activeRect.width;
      }
    });
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
