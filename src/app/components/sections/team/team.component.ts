import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ServiceComponent } from '../../cards/service/service.component';
import { CardMemberComponent } from '../../cards/member/card-member.component';

@Component({
  selector: 'app-team',
  imports: [CardMemberComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {}
