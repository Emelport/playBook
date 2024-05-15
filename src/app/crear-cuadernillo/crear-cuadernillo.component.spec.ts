import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuadernilloComponent } from './crear-cuadernillo.component';

describe('CrearCuadernilloComponent', () => {
  let component: CrearCuadernilloComponent;
  let fixture: ComponentFixture<CrearCuadernilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCuadernilloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearCuadernilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
