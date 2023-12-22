import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersLogComponent } from './letters-log.component';

describe('LettersLogComponent', () => {
  let component: LettersLogComponent;
  let fixture: ComponentFixture<LettersLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettersLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
