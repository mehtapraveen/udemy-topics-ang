import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiCompComponent } from './pi-comp.component';

describe('PiCompComponent', () => {
  let component: PiCompComponent;
  let fixture: ComponentFixture<PiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
