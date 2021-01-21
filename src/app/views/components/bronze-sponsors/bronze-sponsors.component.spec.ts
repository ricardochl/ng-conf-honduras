import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BronzeSponsorsComponent } from './bronze-sponsors.component';

describe('BronzeSponsorsComponent', () => {
  let component: BronzeSponsorsComponent;
  let fixture: ComponentFixture<BronzeSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BronzeSponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BronzeSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
