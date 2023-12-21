import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNotesComponent } from './v-notes.component';

describe('VNotesComponent', () => {
  let component: VNotesComponent;
  let fixture: ComponentFixture<VNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VNotesComponent]
    });
    fixture = TestBed.createComponent(VNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
