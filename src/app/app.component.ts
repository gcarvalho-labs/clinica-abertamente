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
import { FooterComponent } from './layout/footer/footer.component';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { DrawerComponent } from './layout/drawer/drawer.component';

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
    FooterComponent,
    ToggleButtonComponent,
    DrawerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDrawerActive = false;

  onToggleDrawer(): void {
    this.isDrawerActive = !this.isDrawerActive;
  }

  navLogo = {
    src: '',
    alt: 'Logo'
  }
  navButton = {
    name: 'Contato',
  };
  navItems = [
    {
      name: 'Serviço',
    },
    {
      name: 'Equipe',
    },
    {
      name: 'Metodologia',
    },
    {
      name: 'Espaço',
    },
    {
      name: 'Blog',
    },
  ];

}
