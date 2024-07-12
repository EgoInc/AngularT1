import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIDsComponent } from './get-ids.component';

describe('GetIDsComponent', () => {
  let component: GetIDsComponent;
  let fixture: ComponentFixture<GetIDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIDsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
