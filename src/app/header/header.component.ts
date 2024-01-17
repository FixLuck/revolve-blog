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

  @Output() buttonClick = new EventEmitter<boolean>;

  showPost() {
    this.buttonClick.emit(true);
  }
}
