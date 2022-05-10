import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibromyalgieComponent } from './fibromyalgie.component';

describe('FibromyalgieComponent', () => {
  let component: FibromyalgieComponent;
  let fixture: ComponentFixture<FibromyalgieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibromyalgieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibromyalgieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
