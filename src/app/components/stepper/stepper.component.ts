import { Component, Input} from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [NgForOf, NgClass],
})
export class StepperComponent  {
  @Input() steps!: { title: string; description: string }[];
  @Input() activeStepIndex!: number;


}
