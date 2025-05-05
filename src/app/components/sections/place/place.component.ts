import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-place',
  imports: [NgForOf],
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss',
})
export class PlaceComponent {
  items = Array(7).fill(0);
}
