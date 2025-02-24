import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-member',
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() imageAlt!: string;
}
