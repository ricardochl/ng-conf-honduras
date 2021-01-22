import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMostPopularCardComponent } from './ticket-most-popular-card.component';

describe('TicketMostPopularCardComponent', () => {
  let component: TicketMostPopularCardComponent;
  let fixture: ComponentFixture<TicketMostPopularCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketMostPopularCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMostPopularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
