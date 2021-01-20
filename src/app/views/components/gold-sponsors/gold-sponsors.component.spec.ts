import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSponsorsComponent } from './gold-sponsors.component';

describe('GoldSponsorsComponent', () => {
  let component: GoldSponsorsComponent;
  let fixture: ComponentFixture<GoldSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldSponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
