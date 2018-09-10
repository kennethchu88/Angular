import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherjsComponent } from './togetherjs.component';

describe('TogetherjsComponent', () => {
  let component: TogetherjsComponent;
  let fixture: ComponentFixture<TogetherjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogetherjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
