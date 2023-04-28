import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingpageComponent } from './paintingpage.component';

describe('PaintingpageComponent', () => {
  let component: PaintingpageComponent;
  let fixture: ComponentFixture<PaintingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
