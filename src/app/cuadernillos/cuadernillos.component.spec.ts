import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadernillosComponent } from './cuadernillos.component';

describe('CuadernillosComponent', () => {
  let component: CuadernillosComponent;
  let fixture: ComponentFixture<CuadernillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadernillosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuadernillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
