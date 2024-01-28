import { Routes, provideRouter } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { ManagerPostComponent } from './manager-post/manager-post.component';
import { ApplicationConfig } from '@angular/core';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'blog-post', component: BlogPostsComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'admin', component: ManagerPostComponent},
    {path: 'home', component: ContainerComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'} //routes mặc định của trang khi đc init
    
];


export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
}