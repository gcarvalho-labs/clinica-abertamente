import {
  Component,
  Input,
  ElementRef,
  QueryList,
  ViewChildren,
  Renderer2,
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

  @Input() gapBetweenSteps: string = '20px';
  @Input() gapInsideStep: string = '5px';
  @Input() paddingLeft: string = '60px';
  @Input() circleSize: string = '32px';
  @Input() circleBorder: string = '5px';
  @Input() lineWidth: string = '5px';
  @Input() lineColor: string = '#1b655a';
  @Input() circleBorderColor: string = '#ef7445';
  @Input() circleBg: string = '#ffffff';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.setCssVariable('--gap-steps', this.gapBetweenSteps);
    this.setCssVariable('--gap-step', this.gapInsideStep);
    this.setCssVariable('--text-indent', this.paddingLeft);
    this.setCssVariable('--circle-size', this.circleSize);
    this.setCssVariable('--circle-border', this.circleBorder);
    this.setCssVariable('--line-width', this.lineWidth);
    this.setCssVariable('--line-color', this.lineColor);
    this.setCssVariable('--circle-border-color', this.circleBorderColor);
    this.setCssVariable('--circle-bg', this.circleBg);
  }

  private setCssVariable(name: string, value: string): void {
    this.renderer.setStyle(this.el.nativeElement, name, value);
  }
}
