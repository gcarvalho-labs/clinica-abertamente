import {Component, AfterViewInit, Output, EventEmitter, HostListener} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ToggleButtonComponent} from '../toggle-button/toggle-button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgForOf, NgIf, ToggleButtonComponent],
})
export class HeaderComponent implements AfterViewInit {
  indicatorLeft: number = 0;
  indicatorWidth: number = 0; // Adiciona o controle da largura do indicador
  isMobile = window.innerWidth <= 991;
  isDrawerActive = false;

  items = [
    { name: 'Início', link: '#' },
    { name: 'Serviços', link: '#' },
    { name: 'Equipe', link: '#' },
    { name: 'Metodologia', link: '#' },
    { name: 'Localização', link: '#' },
    { name: 'Nosso blog', link: '#' },
  ];
  @Output() toggleDrawer = new EventEmitter<void>();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 991;
  }

  toggleButton() {
    this.toggleDrawer.emit();
    this.isDrawerActive = !this.isDrawerActive;
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateIndicatorPosition(0), 100);
  }

  selectMenu(index: number) {
    this.updateIndicatorPosition(index);
  }

  updateIndicatorPosition(index: number) {
    const menuItems = document.querySelectorAll('.header__item');
    const selectedItem = menuItems[index] as HTMLElement;
    const firstItem = menuItems[0] as HTMLElement;

    if (selectedItem && firstItem) {
      // Atualiza a posição e a largura do indicador
      this.indicatorLeft = selectedItem.offsetLeft - firstItem.offsetLeft;
      this.indicatorWidth = selectedItem.offsetWidth;

      const indicator = firstItem.querySelector(
        '.header__indicator',
      ) as HTMLElement;
      if (indicator) {
        indicator.style.left = `${this.indicatorLeft}px`;
        indicator.style.width = `${this.indicatorWidth}px`;
      }
    }
  }
}
