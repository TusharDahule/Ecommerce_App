import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomGlobalComponent } from './ecom-global.component';

describe('EcomGlobalComponent', () => {
  let component: EcomGlobalComponent;
  let fixture: ComponentFixture<EcomGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
