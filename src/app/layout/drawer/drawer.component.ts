import { Component, Input } from '@angular/core';
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
}
