import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../model/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-col-8-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './col-8-category.component.html',
  styleUrl: './col-8-category.component.css'
})
export class Col8CategoryComponent implements OnInit{

  postList: Post[] = [];

  constructor(private postServices: PostsService) {}


  ngOnInit(): void {
    this.postList = this.postServices.getPosts();
  }
}
