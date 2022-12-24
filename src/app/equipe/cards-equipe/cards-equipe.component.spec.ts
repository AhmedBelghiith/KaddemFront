import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEquipeComponent } from './cards-equipe.component';

describe('CardsEquipeComponent', () => {
  let component: CardsEquipeComponent;
  let fixture: ComponentFixture<CardsEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
