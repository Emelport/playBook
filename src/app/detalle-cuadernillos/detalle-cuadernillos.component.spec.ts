import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuadernillosComponent } from './detalle-cuadernillos.component';

describe('DetalleCuadernillosComponent', () => {
  let component: DetalleCuadernillosComponent;
  let fixture: ComponentFixture<DetalleCuadernillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleCuadernillosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleCuadernillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
