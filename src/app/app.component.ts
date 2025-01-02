import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import {HeroComponent} from './components/sections/hero/hero.component';
import { TeamComponent } from './components/sections/team/team.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ServicesComponent,
    HeroComponent,
    DrawerComponent,
    HeroComponent,
    TeamComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDrawerOpen = false;

  title = 'clinica-abertamente';

  toggleDrawerState() {
    this.isDrawerOpen = !this.isDrawerOpen;

    const appRoot = document.querySelector('app-root');
    if (appRoot) {
      if (this.isDrawerOpen) {
        appRoot.classList.add('backdrop--open');
      } else {
        appRoot.classList.remove('backdrop--open');
      }
    }
  }
}
