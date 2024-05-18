import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: homeComponent;
  let fixture: ComponentFixture<homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
