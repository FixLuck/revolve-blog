import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Col4ContentComponent } from './col-4-content.component';

describe('Col4ContentComponent', () => {
  let component: Col4ContentComponent;
  let fixture: ComponentFixture<Col4ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Col4ContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Col4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
