import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Col8ContentComponent } from './col-8-content.component';

describe('Col8ContentComponent', () => {
  let component: Col8ContentComponent;
  let fixture: ComponentFixture<Col8ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Col8ContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Col8ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
