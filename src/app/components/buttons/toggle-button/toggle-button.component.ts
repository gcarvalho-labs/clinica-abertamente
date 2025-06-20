import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  imports: [NgClass],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
})
export class ToggleButtonComponent {
  @Input() isDrawerActive: boolean = false;
}
