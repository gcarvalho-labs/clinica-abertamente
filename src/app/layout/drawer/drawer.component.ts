import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-drawer',
  imports: [NgForOf, NgClass],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() isOpen = false;
  @Input() items: { name: string; vClasses?: any }[] = [];
  @Input() button!: { name: string; };

  @Output() navigateToSection = new EventEmitter<string>();

  onItemClick(itemName: string): void {
    const sectionId = this.sectionIdMap[itemName];
    if (sectionId) {
      this.navigateToSection.emit(sectionId);
    }
  }

  private sectionIdMap: Record<string, string> = {
    Hero: 'hero',
    Serviços: 'services',
    Equipe: 'team',
    Metodologia: 'method',
    Espaço: 'spaces',
    Blog: 'blog',
    Contato: 'contact',
  };
}
