import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [NgForOf, NgClass, FormsModule, NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  isMobile = false;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    this.isMobile = window.innerWidth <= 991;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  menus = [
    { label: 'Serviço', href: '#' },
    { label: 'Equipe', href: '#' },
    { label: 'Metodologia', href: '#' },
    { label: 'Espaço', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  networks = [
    { href: '#', iconClass: 'fab fa-facebook-f' },
    { href: '#', iconClass: 'fab fa-linkedin-in' },
    { href: '#', iconClass: 'fab fa-x-twitter' },
    { href: '#', iconClass: 'fab fa-instagram' },
  ];

  private sectionIdMap: Record<string, string> = {
    Serviço: 'services',
    Equipe: 'team',
    Metodologia: 'method',
    Espaço: 'spaces',
    Blog: 'blog',
    Contato: 'contact',
  };

  @Output() navigateToSection = new EventEmitter<string>();

  onMenuClick(label: string): void {
    const sectionId = this.sectionIdMap[label];
    if (sectionId) {
      this.navigateToSection.emit(sectionId);
    }
  }

  buttonState: 'idle' | 'loading' | 'success' = 'idle';

  onSubmit(form: any): void {
    if (form.invalid || this.buttonState !== 'idle') return;

    this.buttonState = 'loading';

    const email = form.value.email;
    console.log('E-mail válido:', email);

    // futuramente: enviar para API
    setTimeout(() => {
      this.buttonState = 'success';
      form.resetForm();
    }, 3000);
  }
}
