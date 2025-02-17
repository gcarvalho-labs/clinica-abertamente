import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { NgClass } from '@angular/common';
import { TeamComponent } from './components/sections/team/team.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    DrawerComponent,
    ServicesComponent,
    NgClass,
    TeamComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  drawerVisible = false;
  @HostListener('document:keydown.escape', ['$event'])
  onEscPressed(event: KeyboardEvent) {
    this.drawerVisible = false;
  }
}
