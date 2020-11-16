import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohesComponent } from './cohes.component';

describe('CohesComponent', () => {
  let component: CohesComponent;
  let fixture: ComponentFixture<CohesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CohesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
