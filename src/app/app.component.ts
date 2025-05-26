import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { PlaceComponent } from './components/sections/place/place.component';
import { TeamComponent } from './components/sections/team/team.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PlaceComponent,
    TeamComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
