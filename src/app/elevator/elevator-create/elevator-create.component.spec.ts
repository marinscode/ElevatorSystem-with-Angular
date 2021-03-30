import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorCreateComponent } from './elevator-create.component';

describe('ElevatorCreateComponent', () => {
  let component: ElevatorCreateComponent;
  let fixture: ComponentFixture<ElevatorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevatorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevatorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
