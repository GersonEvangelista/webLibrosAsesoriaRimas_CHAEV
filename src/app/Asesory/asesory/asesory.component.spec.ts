import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoryComponent } from './asesory.component';

describe('AsesoryComponent', () => {
  let component: AsesoryComponent;
  let fixture: ComponentFixture<AsesoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsesoryComponent]
    });
    fixture = TestBed.createComponent(AsesoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
