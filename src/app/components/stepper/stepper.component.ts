import {
  Component,
  Input,
  ElementRef,
  QueryList,
  ViewChildren,
  OnInit,
} from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [NgForOf, NgIf, NgClass],
})
export class StepperComponent implements OnInit {
  @Input() steps: { title: string; description: string }[] = [];
  @ViewChildren('stepElement') stepElements!: QueryList<ElementRef>;
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';


  /****** Circle ******/
  @Input() circleSize!: string;
  @Input() circleThickness!: string;
  @Input() circleBg!: string;
  @Input() circleBorderBg!: string;

  /****** Line ******/
  @Input() lineSize!: string;
  @Input() lineThickness!: string;
  @Input() lineBg!: string;

  /****** Label ******/
  @Input() labelSize!: string;
  @Input() labelGap!: string;
  // Label Vertical
  @Input() labelVTop!: string;
  @Input() labelVLeft!: string;
  // Label Horizontal
  @Input() labelHTop!: string;
  @Input() labelHLeft!: string;

  /****** Title ******/
  @Input() titleSize!: string;

  /****** Description ******/
  @Input() descriptionSize!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const host = this.el.nativeElement as HTMLElement;

    const cssVars: Record<string, string | undefined> = {
      '--circle-size': this.circleSize,
      '--circle-thickness': this.circleThickness,
      '--circle-bg': this.circleBg,
      '--circle-border-bg': this.circleBorderBg,
      '--line-size': this.lineSize,
      '--line-thickness': this.lineThickness,
      '--line-bg': this.lineBg,
      '--label-size': this.labelSize,
      '--label-v-top': this.labelVTop,
      '--label-v-left': this.labelVLeft,
      '--label-h-top': this.labelHTop,
      '--label-h-left': this.labelHLeft,
      '--label-gap': this.labelGap,
      '--title-size': this.titleSize,
      '--description-size': this.descriptionSize,
    };

    for (const [key, value] of Object.entries(cssVars)) {
      if (value) {
        host.style.setProperty(key, value);
      }
    }
  }
}
