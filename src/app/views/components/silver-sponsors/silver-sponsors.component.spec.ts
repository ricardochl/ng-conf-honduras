import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverSponsorsComponent } from './silver-sponsors.component';

describe('SilverSponsorsComponent', () => {
  let component: SilverSponsorsComponent;
  let fixture: ComponentFixture<SilverSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverSponsorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
