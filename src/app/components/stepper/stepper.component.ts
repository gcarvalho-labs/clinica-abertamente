import { Component, Input } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-stepper',
  imports: [NgForOf, NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  @Input() steps: { title: string; description: string }[] = [];
}
