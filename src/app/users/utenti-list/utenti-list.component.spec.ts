import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiListComponent } from './utenti-list.component';

describe('UtentiListComponent', () => {
  let component: UtentiListComponent;
  let fixture: ComponentFixture<UtentiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtentiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtentiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
