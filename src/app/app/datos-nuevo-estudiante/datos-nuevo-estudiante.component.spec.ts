import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosNuevoEstudianteComponent } from './datos-nuevo-estudiante.component';

describe('DatosNuevoEstudianteComponent', () => {
  let component: DatosNuevoEstudianteComponent;
  let fixture: ComponentFixture<DatosNuevoEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosNuevoEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosNuevoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
