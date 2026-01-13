import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MemberComponent } from '../../components/cards/member/member.component';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-team',
  imports: [NgForOf, MemberComponent, RevealOnScrollDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  @ViewChild('carousel', { static: true })
  carousel!: ElementRef<HTMLDivElement>;

  private readonly cardWidth = 316;
  activeIndex = 0;

  activeMemberIndex: number | null = null;

  @HostListener('document:click')
  closeAllMembers(): void {
    this.activeMemberIndex = null;
  }

  setActiveMember(index: number): void {
    this.activeMemberIndex = this.activeMemberIndex === index ? null : index;
  }

  // controle do gesto
  private startX = 0;
  private startY = 0;
  private deltaX = 0;
  private deltaY = 0;
  private axisLocked: 'horizontal' | 'vertical' | null = null;
  private isDragging = false;

  /* =========================
     CONTROLES POR BOTÃO
     ========================= */
  scrollLeft(): void {
    this.goToIndex(this.activeIndex - 1);
  }

  scrollRight(): void {
    this.goToIndex(this.activeIndex + 1);
  }

  /* =========================
     GESTOS (ESTILO PAGEVIEW)
     ========================= */
  onPointerDown(event: PointerEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.axisLocked = null;

    const el = this.carousel.nativeElement;
    el.style.transition = 'none';
    el.setPointerCapture(event.pointerId);
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging) return;

    this.deltaX = event.clientX - this.startX;
    this.deltaY = event.clientY - this.startY;

    // ainda não decidiu o eixo
    if (!this.axisLocked) {
      const absX = Math.abs(this.deltaX);
      const absY = Math.abs(this.deltaY);

      // pequeno threshold para evitar jitter
      if (absX < 8 && absY < 8) return;

      this.axisLocked = absX > absY ? 'horizontal' : 'vertical';
    }

    // se for vertical → solte e deixe a página rolar
    if (this.axisLocked === 'vertical') {
      this.resetGesture(event);
      return;
    }

    // horizontal → agora o carrossel assume
    event.preventDefault();
    this.applyTranslate(this.deltaX);
  }

  onPointerUp(event: PointerEvent): void {
    if (!this.isDragging || this.axisLocked !== 'horizontal') {
      this.resetGesture(event);
      this.animateToIndex();
      return;
    }

    const threshold = this.cardWidth * 0.25;

    if (Math.abs(this.deltaX) > threshold) {
      this.activeIndex += this.deltaX < 0 ? 1 : -1;
    }

    this.activeIndex = this.clampIndex(this.activeIndex);
    this.resetGesture(event);
    this.animateToIndex();
  }

  onPointerCancel(event: PointerEvent): void {
    this.resetGesture(event);
    this.animateToIndex();
  }

  /* =========================
     MOVIMENTO
     ========================= */
  private applyTranslate(offset: number): void {
    const base = -this.activeIndex * this.cardWidth;
    this.carousel.nativeElement.style.transform = `translateX(${base + offset}px)`;
  }

  private animateToIndex(): void {
    const target = -this.activeIndex * this.cardWidth;
    const el = this.carousel.nativeElement;

    el.style.transition = 'transform 0.3s ease';
    el.style.transform = `translateX(${target}px)`;
  }

  private goToIndex(index: number): void {
    this.activeIndex = this.clampIndex(index);
    this.animateToIndex();
  }

  private clampIndex(index: number): number {
    return Math.max(0, Math.min(index, this.team.length - 1));
  }

  private resetGesture(event: PointerEvent): void {
    this.isDragging = false;
    this.axisLocked = null;
    this.deltaX = 0;
    this.deltaY = 0;

    try {
      this.carousel.nativeElement.releasePointerCapture(event.pointerId);
    } catch {
      // o pointer já pode ter sido liberado pelo browser
    }
  }

  team = [
    {
      name: 'Lorem Ipsum',
      about: 'Pellentesque nec eros arcu. Nulla placerat augue lacinia vitae.',
      photo: {
        src: 'images/members/member1.webp',
        alt: 'Foto do Membro 1',
      },
      networks: ['', '', ''],
    },
    {
      name: 'Lorem Ipsum',
      about: 'Cras id varius nisl. Sed mauris id congue laoreet etiam eget.',
      photo: {
        src: 'images/members/member2.webp',
        alt: 'Foto do Membro 2',
      },
      networks: ['', '', ''],
    },
    {
      name: 'Lorem Ipsum',
      about: 'Sed rhoncus mauris id congue laoreet. Nulla ut, pretium metus.',
      photo: {
        src: 'images/members/member3.webp',
        alt: 'Foto do Membro 3',
      },
      networks: ['', '', ''],
    },
    {
      name: 'Lorem Ipsum',
      about:
        'Etiam ultrices mi id neque tempor, eget faucibus nulla tristique.',
      photo: {
        src: 'images/members/member4.webp',
        alt: 'Foto do Membro 4',
      },
      networks: ['', '', ''],
    },
    {
      name: 'Lorem Ipsum',
      about:
        'Aliquam volutpat faucibus est at condimentum. Nam consequat a eget quam.',
      photo: {
        src: 'images/members/member5.webp',
        alt: 'Foto do Membro 5',
      },
      networks: ['', '', ''],
    },
  ];
}
