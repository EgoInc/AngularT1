import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFunctionButtonsComponent } from './main-function-buttons.component';

describe('MainFunctionButtonsComponent', () => {
  let component: MainFunctionButtonsComponent;
  let fixture: ComponentFixture<MainFunctionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFunctionButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFunctionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
