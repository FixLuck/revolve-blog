import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() clickPost = new EventEmitter<boolean>();
  @Output() clickHome = new EventEmitter<boolean>();

  showPost() {
    this.clickPost.emit(true);
  }

  showHome() {
    this.clickHome.emit(true);
  }
}
