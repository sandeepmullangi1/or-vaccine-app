import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligilityComponent } from './eligility.component';

describe('EligilityComponent', () => {
  let component: EligilityComponent;
  let fixture: ComponentFixture<EligilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
