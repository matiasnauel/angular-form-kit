import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComplexComponent } from './form-complex.component';

describe('FormComplexComponent', () => {
  let component: FormComplexComponent;
  let fixture: ComponentFixture<FormComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComplexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
