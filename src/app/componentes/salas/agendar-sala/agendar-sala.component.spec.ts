import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarSalaComponent } from './agendar-sala.component';

describe('AgendarSalaComponent', () => {
  let component: AgendarSalaComponent;
  let fixture: ComponentFixture<AgendarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
