import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndSubmitDialogComponent } from './edit-and-submit-dialog.component';

describe('EditAndSubmitDialogComponent', () => {
  let component: EditAndSubmitDialogComponent;
  let fixture: ComponentFixture<EditAndSubmitDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAndSubmitDialogComponent]
    });
    fixture = TestBed.createComponent(EditAndSubmitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
