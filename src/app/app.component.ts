import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { SpaceComponent } from './components/sections/space/space.component';
import { TeamComponent } from './components/sections/team/team.component';
import { MethodComponent } from './components/sections/method/method.component';
import { ContactComponent } from './components/sections/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    SpaceComponent,
    TeamComponent,
    MethodComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
