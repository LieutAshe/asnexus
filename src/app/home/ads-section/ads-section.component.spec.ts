import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsSectionComponent } from './ads-section.component';

describe('AdsSectionComponent', () => {
  let component: AdsSectionComponent;
  let fixture: ComponentFixture<AdsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsSectionComponent]
    });
    fixture = TestBed.createComponent(AdsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
