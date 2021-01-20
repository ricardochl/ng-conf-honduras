import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinumSponsorsComponent } from './platinum-sponsors.component';

describe('PlatinumSponsorsComponent', () => {
  let component: PlatinumSponsorsComponent;
  let fixture: ComponentFixture<PlatinumSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatinumSponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatinumSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
