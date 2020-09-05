import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingstableComponent } from './holdingstable.component';

describe('HoldingstableComponent', () => {
  let component: HoldingstableComponent;
  let fixture: ComponentFixture<HoldingstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
