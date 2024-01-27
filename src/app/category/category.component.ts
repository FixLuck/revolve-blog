import { Component } from '@angular/core';
import { Col4CategoryComponent } from './col-4-category/col-4-category.component';
import { Col8CategoryComponent } from './col-8-category/col-8-category.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [Col4CategoryComponent, Col8CategoryComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
