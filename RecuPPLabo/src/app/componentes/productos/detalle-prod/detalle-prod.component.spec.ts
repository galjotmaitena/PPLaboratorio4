import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProdComponent } from './detalle-prod.component';

describe('DetalleProdComponent', () => {
  let component: DetalleProdComponent;
  let fixture: ComponentFixture<DetalleProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProdComponent]
    });
    fixture = TestBed.createComponent(DetalleProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
