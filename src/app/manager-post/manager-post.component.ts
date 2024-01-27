import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';


@Component({
  selector: 'app-manager-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './manager-post.component.html',
  styleUrl: './manager-post.component.css'
})
export class ManagerPostComponent implements OnInit {
  constructor(private postServices: PostsService, private fb: FormBuilder) {}

  postList: Post[] = [];

  ngOnInit(): void {
    this.postList = this.postServices.getPosts();
  }

  currentIndex = 0;


  itemPerPage = 5;
  currentPage = 1;


  writeToForm(post: Post, index: number) {
    this.updateForm.controls.catName.setValue(post.categoryName);
    this.updateForm.controls.content.setValue(post.content);
    this.updateForm.controls.titlePost.setValue(post.title);
    this.currentIndex = index;
  }

  updateForm = this.fb.group({
    catName: [''],
    titlePost: [''],
    content: ['']
  })

  updatePost() {
    if(this.currentIndex !== null && this.currentIndex >=0 && this.currentIndex < this.postList.length) {
      const selectPost = this.postList[this.currentIndex];
      selectPost.categoryName = this.updateForm.controls.catName.value!;
      selectPost.title = this.updateForm.controls.titlePost.value!;
      selectPost.content = this.updateForm.controls.content.value!;
    }
  }

  removePost() {
    this.postList.splice(this.currentIndex, 1);
  }

  get paginatedPost() {
    const start = (this.currentPage - 1) * (this.itemPerPage);
    const end = start + this.itemPerPage;

    return this.postList.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  sortByCat() {
    this.postList.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
  }

  sortByDate() {
    this.postList.sort((a, b) => a.date?.getTime() - b.date?.getTime());
  } 

}
