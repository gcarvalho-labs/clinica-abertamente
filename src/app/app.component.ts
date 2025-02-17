import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/sections/hero/hero.component';
import {DrawerComponent} from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    DrawerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  drawerVisible = false;

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
}
