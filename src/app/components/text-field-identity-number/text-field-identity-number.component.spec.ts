import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldIdentityNumberComponent } from './text-field-identity-number.component';

describe('TextFieldIdentityNumberComponent', () => {
  let component: TextFieldIdentityNumberComponent;
  let fixture: ComponentFixture<TextFieldIdentityNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldIdentityNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextFieldIdentityNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
