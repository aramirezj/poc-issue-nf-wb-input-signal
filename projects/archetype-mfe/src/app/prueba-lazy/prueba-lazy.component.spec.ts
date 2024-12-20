import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaLazyComponent } from './prueba-lazy.component';

describe('PruebaLazyComponent', () => {
  let component: PruebaLazyComponent;
  let fixture: ComponentFixture<PruebaLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaLazyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
