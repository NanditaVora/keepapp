import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoteOpenerComponent } from './edit-note-opener.component';

describe('EditNoteOpenerComponent', () => {
  let component: EditNoteOpenerComponent;
  let fixture: ComponentFixture<EditNoteOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNoteOpenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoteOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
