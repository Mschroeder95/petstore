import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetResultComponent } from './pet-result.component';

describe('PetResultComponent', () => {
  let component: PetResultComponent;
  let fixture: ComponentFixture<PetResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
