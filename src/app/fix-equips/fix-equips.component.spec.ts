import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixEquipsComponent } from './fix-equips.component';

describe('FixEquipsComponent', () => {
  let component: FixEquipsComponent;
  let fixture: ComponentFixture<FixEquipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixEquipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixEquipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
