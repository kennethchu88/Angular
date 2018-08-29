import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigaionbarComponent } from './navigaionbar.component';

describe('NavigaionbarComponent', () => {
  let component: NavigaionbarComponent;
  let fixture: ComponentFixture<NavigaionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigaionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigaionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
