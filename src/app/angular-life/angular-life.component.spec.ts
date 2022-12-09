import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeComponent } from './angular-life.component';

describe('AngularLifeComponent', () => {
  let component: AngularLifeComponent;
  let fixture: ComponentFixture<AngularLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
