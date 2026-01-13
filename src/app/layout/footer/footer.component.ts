import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgForOf, NgClass],
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
}
