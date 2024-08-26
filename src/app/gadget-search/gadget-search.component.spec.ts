import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetSearchComponent } from './gadget-search.component';

describe('GadgetSearchComponent', () => {
  let component: GadgetSearchComponent;
  let fixture: ComponentFixture<GadgetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GadgetSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GadgetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
