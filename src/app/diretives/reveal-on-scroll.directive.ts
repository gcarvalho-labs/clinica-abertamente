import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective
  implements AfterViewInit, OnDestroy
{
  private observer?: IntersectionObserver;

  constructor(private element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.classList.add('is-visible');
          this.observer?.unobserve(this.element.nativeElement);
        }
      },
      {
        threshold: 0.2,
      }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
