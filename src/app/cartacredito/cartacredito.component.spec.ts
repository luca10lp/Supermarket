import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartacreditoComponent } from './cartacredito.component';

describe('CartacreditoComponent', () => {
  let component: CartacreditoComponent;
  let fixture: ComponentFixture<CartacreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartacreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartacreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
