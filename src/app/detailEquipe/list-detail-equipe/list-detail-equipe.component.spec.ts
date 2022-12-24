import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailEquipeComponent } from './list-detail-equipe.component';

describe('ListDetailEquipeComponent', () => {
  let component: ListDetailEquipeComponent;
  let fixture: ComponentFixture<ListDetailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
