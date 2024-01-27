import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Output() onClick = new EventEmitter<number>();

  totalPages = 0;
  pages: number[] = [];

  constructor() {

  }

  ngOnInit(): void {
    if(this.totalItems) { //câu lệnh điều kiện kiểm tra xem totalItem có null hay undefined hay ko
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
      
    }
  }

  pageClick(page: number) {
    if(page > this.totalPages) return;
    this.onClick.emit(page);
  }
}
