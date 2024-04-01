import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryWorksComponent } from './literary-works.component';

describe('LiteraryWorksComponent', () => {
  let component: LiteraryWorksComponent;
  let fixture: ComponentFixture<LiteraryWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiteraryWorksComponent]
    });
    fixture = TestBed.createComponent(LiteraryWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
