import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexOneComponent } from './forex-one.component';

describe('ForexOneComponent', () => {
  let component: ForexOneComponent;
  let fixture: ComponentFixture<ForexOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
