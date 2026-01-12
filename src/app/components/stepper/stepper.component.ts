import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

export interface StepperStep {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

@Component({
  selector: 'app-stepper',
  imports: [NgForOf, NgIf],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  @Input({ required: true }) steps: StepperStep[] = [];
}
