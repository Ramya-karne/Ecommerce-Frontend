import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjayComponent } from './ajay.component';

describe('AjayComponent', () => {
  let component: AjayComponent;
  let fixture: ComponentFixture<AjayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjayComponent]
    });
    fixture = TestBed.createComponent(AjayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
