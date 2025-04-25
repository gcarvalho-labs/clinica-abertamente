import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [NgClass],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  @Input() title!: string;
  @Input() description?: string;
  @Input() subtitle!: string;
  @Input() vClass!: string | null;

  get vService(): string {
    return this.vClass ? 'service--' + this.vClass : '';
  }

  get vTitle(): string {
    return this.vClass ? 'service__title--' + this.vClass : '';
  }

  get vDescription(): string {
    return this.vClass ? 'service__description--' + this.vClass : '';
  }

  get vSubtitle(): string {
    return this.vClass ? 'service__subtitle--' + this.vClass : '';
  }
}
