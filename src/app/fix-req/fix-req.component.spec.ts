import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixReqComponent } from './fix-req.component';

describe('FixReqComponent', () => {
  let component: FixReqComponent;
  let fixture: ComponentFixture<FixReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixReqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
