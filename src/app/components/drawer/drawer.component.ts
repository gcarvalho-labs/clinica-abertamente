import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-drawer',
  imports: [NgForOf],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() visible = false;

  items = [
    { name: 'Início', link: '#' },
    { name: 'Serviços', link: '#' },
    { name: 'Equipe', link: '#' },
    { name: 'Metodologia', link: '#' },
    { name: 'Localização', link: '#' },
    { name: 'Nosso blog', link: '#' }
  ];
}
