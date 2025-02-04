import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTycoonComponent } from './click-tycoon.component';

describe('ClickTycoonComponent', () => {
  let component: ClickTycoonComponent;
  let fixture: ComponentFixture<ClickTycoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickTycoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickTycoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
