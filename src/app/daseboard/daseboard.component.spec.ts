import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaseboardComponent } from './daseboard.component';

describe('DaseboardComponent', () => {
  let component: DaseboardComponent;
  let fixture: ComponentFixture<DaseboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaseboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaseboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
