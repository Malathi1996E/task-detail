import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectimageComponent } from './selectimage.component';

describe('SelectimageComponent', () => {
  let component: SelectimageComponent;
  let fixture: ComponentFixture<SelectimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
