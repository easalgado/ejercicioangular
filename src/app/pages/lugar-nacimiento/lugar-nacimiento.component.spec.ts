import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarNacimientoComponent } from './lugar-nacimiento.component';

describe('LugarNacimientoComponent', () => {
  let component: LugarNacimientoComponent;
  let fixture: ComponentFixture<LugarNacimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarNacimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarNacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
