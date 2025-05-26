import {
  Component,
  Input,
  ElementRef,
  QueryList,
  ViewChildren,
  OnInit,
} from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [NgForOf],
})
export class StepperComponent implements OnInit {
  @Input() steps: { title: string; description: string }[] = [];
  @ViewChildren('stepElement') stepElements!: QueryList<ElementRef>;

  @Input() gapBetweenSteps!: string;
  @Input() gapInsideStep!: string;
  @Input() paddingLeft!: string;
  @Input() circleSize!: string;
  @Input() circleBorder!: string;
  @Input() lineWidth!: string;
  @Input() lineColor!: string;
  @Input() circleBorderColor!: string;
  @Input() circleBg!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    if (this.gapBetweenSteps) {
      host.style.setProperty('--gap-steps', this.gapBetweenSteps);
    }
    if (this.gapInsideStep) {
      host.style.setProperty('--gap-step', this.gapInsideStep);
    }
    if (this.paddingLeft) {
      host.style.setProperty('--text-indent', this.paddingLeft);
    }
    if (this.circleSize) {
      host.style.setProperty('--circle-size', this.circleSize);
    }
    if (this.circleBorder) {
      host.style.setProperty('--circle-border', this.circleBorder);
    }
    if (this.lineWidth) {
      host.style.setProperty('--line-width', this.lineWidth);
    }
    if (this.lineColor) {
      host.style.setProperty('--line-color', this.lineColor);
    }
    if (this.circleBorderColor) {
      host.style.setProperty('--circle-border-color', this.circleBorderColor);
    }
    if (this.circleBg) {
      host.style.setProperty('--circle-bg', this.circleBg);
    }
  }
}
