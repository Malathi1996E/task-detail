import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTOcardComponent } from './add-tocard.component';

describe('AddTOcardComponent', () => {
  let component: AddTOcardComponent;
  let fixture: ComponentFixture<AddTOcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTOcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTOcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
