import { AfterViewInit, Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { SpacesComponent } from './sections/spaces/spaces.component';
import { TeamComponent } from './sections/team/team.component';
import { MethodComponent } from './sections/method/method.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { DrawerComponent } from './layout/drawer/drawer.component';
import Lenis from '@studio-freight/lenis';
import { BlogComponent } from './sections/blog/blog.component';
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
    FooterComponent,
    ToggleButtonComponent,
    DrawerComponent,
    BlogComponent,
    FloatingButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private lenis!: Lenis;
  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    // 🔒 Impede o browser de restaurar scroll no refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      const raf = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      // 🔑 Correção do scroll inicial
      requestAnimationFrame(() => {
        this.lenis.scrollTo(0, { immediate: true });
      });
    });
  }

  isDrawerActive = false;

  onToggleDrawer(): void {
    this.isDrawerActive = !this.isDrawerActive;
  }

  scrollToSection(sectionId: string): void {
    this.isDrawerActive = false;

    const element = document.getElementById(sectionId);
    if (!element) return;

    this.lenis.scrollTo(element, { offset: -132 });
  }

  navLogo = {
    src: 'images/header/logo.png',
    alt: 'Logo',
  };

  navButton = {
    name: 'Contato',
  };

  navItems = [
    {
      name: 'Serviços',
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
