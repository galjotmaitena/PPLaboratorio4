import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoContainerComponent } from './producto-container.component';

describe('ProductoContainerComponent', () => {
  let component: ProductoContainerComponent;
  let fixture: ComponentFixture<ProductoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoContainerComponent]
    });
    fixture = TestBed.createComponent(ProductoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
