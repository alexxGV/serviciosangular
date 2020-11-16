import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleariossalarioComponent } from './empleariossalario.component';

describe('EmpleariossalarioComponent', () => {
  let component: EmpleariossalarioComponent;
  let fixture: ComponentFixture<EmpleariossalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleariossalarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleariossalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
