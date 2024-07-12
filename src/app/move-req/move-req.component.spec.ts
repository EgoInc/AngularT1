import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveReqComponent } from './move-req.component';

describe('MoveReqComponent', () => {
  let component: MoveReqComponent;
  let fixture: ComponentFixture<MoveReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveReqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
