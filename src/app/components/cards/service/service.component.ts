import { Component, Input } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [NgClass],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() subtitle!: string;
  @Input() type: string = 'default';
}
