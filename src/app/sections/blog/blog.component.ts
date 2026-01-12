import { Component } from '@angular/core';
import { PostComponent } from '../../components/cards/post/post.component';
@Component({
  selector: 'app-blog',
  imports: [PostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {}
