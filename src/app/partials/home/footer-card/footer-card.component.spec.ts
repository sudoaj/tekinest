import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCardComponent } from './footer-card.component';

describe('FooterCardComponent', () => {
  let component: FooterCardComponent;
  let fixture: ComponentFixture<FooterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
