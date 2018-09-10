import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixijsComponent } from './pixijs.component';

describe('PixijsComponent', () => {
  let component: PixijsComponent;
  let fixture: ComponentFixture<PixijsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixijsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixijsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
