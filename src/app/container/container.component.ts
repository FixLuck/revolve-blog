import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Col8ContentComponent } from './col-8-content/col-8-content.component';
import { Col4ContentComponent } from './col-4-content/col-4-content.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, Col8ContentComponent, Col4ContentComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
