import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-space',
  imports: [NgClass],
  templateUrl: './space.component.html',
  styleUrl: './space.component.scss',
})
export class SpaceComponent {
  @Input() name!: string;
  @Input() about?: string;
  @Input() photo!: { src: string; alt: string };
  @Input() vClass?: string;
}
