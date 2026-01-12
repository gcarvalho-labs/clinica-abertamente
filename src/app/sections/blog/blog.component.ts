import { Component } from '@angular/core';
import { PostComponent } from '../../components/cards/post/post.component';
import { RevealOnScrollDirective } from '../../diretives/reveal-on-scroll.directive';
@Component({
  selector: 'app-blog',
  imports: [PostComponent, RevealOnScrollDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
