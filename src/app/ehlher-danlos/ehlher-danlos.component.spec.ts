import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhlherDanlosComponent } from './ehlher-danlos.component';

describe('EhlherDanlosComponent', () => {
  let component: EhlherDanlosComponent;
  let fixture: ComponentFixture<EhlherDanlosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhlherDanlosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhlherDanlosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
