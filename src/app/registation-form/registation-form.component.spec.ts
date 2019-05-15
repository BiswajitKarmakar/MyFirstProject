import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationFormComponent } from './registation-form.component';

describe('RegistationFormComponent', () => {
  let component: RegistationFormComponent;
  let fixture: ComponentFixture<RegistationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
