import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingschartComponent } from './holdingschart.component';

describe('HoldingschartComponent', () => {
  let component: HoldingschartComponent;
  let fixture: ComponentFixture<HoldingschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingschartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
