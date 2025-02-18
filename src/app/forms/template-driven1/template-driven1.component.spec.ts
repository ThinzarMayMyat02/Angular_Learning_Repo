import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriven1Component } from './template-driven1.component';

describe('TemplateDriven1Component', () => {
  let component: TemplateDriven1Component;
  let fixture: ComponentFixture<TemplateDriven1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDriven1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDriven1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
