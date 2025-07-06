import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgForOf, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgForOf, NgStyle, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  // Menu configuration
  @Input() items: { name: string }[] = [];
  @Input() logo!: { src: string; alt: string };
  @Input() button!: { name: string };
  // State
  activeIndex = 0;
  isMobile = window.innerWidth <= 991;

  // DOM references
  @ViewChildren('nameRefs', { read: ElementRef })
  buttons!: QueryList<ElementRef>;

  // Indicator position
  indicatorLeft = 0;
  indicatorWidth = 0;

  // Lifecycle
  ngAfterViewInit(): void {
    setTimeout(() => this.updateIndicator(), 0);
  }

  // Listeners
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
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
}
