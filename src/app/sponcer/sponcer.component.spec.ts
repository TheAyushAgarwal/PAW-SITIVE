import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponcerComponent } from './sponcer.component';

describe('SponcerComponent', () => {
  let component: SponcerComponent;
  let fixture: ComponentFixture<SponcerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponcerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
