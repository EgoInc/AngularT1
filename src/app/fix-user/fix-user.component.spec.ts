import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixUserComponent } from './fix-user.component';

describe('FixUserComponent', () => {
  let component: FixUserComponent;
  let fixture: ComponentFixture<FixUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
