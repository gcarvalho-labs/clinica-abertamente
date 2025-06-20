import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-member',
  imports: [NgForOf],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss',
})
export class MemberComponent {
  @Input() name!: string;
  @Input() about?: string;
  @Input() networks!: string[];
  @Input() photo!: { src: string; alt: string };
}
