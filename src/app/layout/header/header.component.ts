import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener, Input,
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
  // Menu configuration
  @Input() items: { name: string; vClasses?: any }[] = [];
  @Input() logo!: { src: string; alt: string };

  // State
  activeIndex = 1;
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
    if (index > 0 && index < this.items.length - 1) {
      this.activeIndex = index;
      this.updateIndicator();
    }
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
