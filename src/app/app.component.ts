import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ManagerPostComponent } from './manager-post/manager-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, 
    ContainerComponent, FooterComponent, BlogPostsComponent, 
    ContactComponent, AboutComponent, CategoryComponent, ManagerPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'revolve-blog';

  clickLogin = false;

  handleClick(click: boolean) {
    this.clickLogin = click;
  }
}
