import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoginTabComponent } from './signup-login-tab.component';

describe('SignupLoginTabComponent', () => {
  let component: SignupLoginTabComponent;
  let fixture: ComponentFixture<SignupLoginTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupLoginTabComponent]
    });
    fixture = TestBed.createComponent(SignupLoginTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
