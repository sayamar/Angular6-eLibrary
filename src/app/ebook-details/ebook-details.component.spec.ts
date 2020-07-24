import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookDetailsComponent } from './ebook-details.component';

describe('EbookDetailsComponent', () => {
  let component: EbookDetailsComponent;
  let fixture: ComponentFixture<EbookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
