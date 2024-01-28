import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() clickLogin = new EventEmitter<boolean>();


  showManage() {
    this.clickLogin.emit(true)
  }
}
