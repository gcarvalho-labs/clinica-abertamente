import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [NgIf, NgClass],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  @Input() title!: string;
  @Input() description?: string;
  @Input() subtitle!: string;
  @Input() icon!: string;
  @Input() image!: { src: string; alt: string };
  @Input() imageClass!: string;
}
