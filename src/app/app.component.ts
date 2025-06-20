import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { SpacesComponent } from './sections/spaces/spaces.component';
import { TeamComponent } from './sections/team/team.component';
import { MethodComponent } from './sections/method/method.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FloatingButtonComponent } from './components/buttons/floating-button/floating-button.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    SpacesComponent,
    TeamComponent,
    MethodComponent,
    ContactComponent,
    FloatingButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
