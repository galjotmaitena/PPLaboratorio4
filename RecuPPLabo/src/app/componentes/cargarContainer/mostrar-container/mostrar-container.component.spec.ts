import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarContainerComponent } from './mostrar-container.component';

describe('MostrarContainerComponent', () => {
  let component: MostrarContainerComponent;
  let fixture: ComponentFixture<MostrarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarContainerComponent]
    });
    fixture = TestBed.createComponent(MostrarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
