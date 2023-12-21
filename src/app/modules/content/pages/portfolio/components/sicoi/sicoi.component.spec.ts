import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicoiComponent } from './sicoi.component';

describe('SicoiComponent', () => {
  let component: SicoiComponent;
  let fixture: ComponentFixture<SicoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SicoiComponent]
    });
    fixture = TestBed.createComponent(SicoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
