import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelthComponent } from './twelth.component';

describe('TwelthComponent', () => {
  let component: TwelthComponent;
  let fixture: ComponentFixture<TwelthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwelthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
