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
    { name: 'Início', links: '#' },
    { name: 'Serviços', links: '#' },
    { name: 'Espaço' +
        '', links: '#' },
    { name: 'Equipe', links: '#' },
    { name: 'Metodologia', links: '#' },
    { name: 'Localização', links: '#' },
  ];
}
