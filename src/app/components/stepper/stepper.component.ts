import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [NgForOf, NgClass],
})
export class StepperComponent implements AfterViewInit {
  @Input() steps: { title: string; description: string }[] = [];
  @Output() stepActivated = new EventEmitter<number>();
  @Input() activeStepIndex: number = -1; // Nenhum step ativado ao carregar

  @ViewChildren('stepElement') stepElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = this.stepElements
            .toArray()
            .findIndex((el) => el.nativeElement === entry.target);

          if (entry.isIntersecting && index !== -1) {
            if (this.activeStepIndex < index) {
              this.stepActivated.emit(index); // Atualiza apenas quando um novo step for ativado
            }
          }
        });
      },
      { threshold: 1.0 } // Apenas quando 100% visível
    );

    this.stepElements.forEach((step) => observer.observe(step.nativeElement));
  }
}
