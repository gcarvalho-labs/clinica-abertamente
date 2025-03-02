import {Component, ElementRef, HostListener, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-member',
  imports: [NgClass],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss',
})
export class MemberComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() imageAlt!: string;

  isExpanded = false; // Estado do botão

  constructor(private eRef: ElementRef) {}

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  // Fecha ao clicar fora do botão
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
    }
  }
}
