import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavenApiRestComponent } from './maven-api-rest.component';

describe('MavenApiRestComponent', () => {
  let component: MavenApiRestComponent;
  let fixture: ComponentFixture<MavenApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MavenApiRestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MavenApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
