import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/sections/services/services.component';
// import { HeroComponent } from './components/sections/hero/hero.component';
import { DrawerComponent } from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ServicesComponent,
    // HeroComponent,
    DrawerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDrawerOpen = false;

  title = 'clinica-abertamente';

  toggleDrawerState(): void {
    this.isDrawerOpen = !this.isDrawerOpen; // Alterna o estado do drawer
  }
}
