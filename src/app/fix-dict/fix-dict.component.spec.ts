import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixDictComponent } from './fix-dict.component';

describe('FixDictComponent', () => {
  let component: FixDictComponent;
  let fixture: ComponentFixture<FixDictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixDictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
