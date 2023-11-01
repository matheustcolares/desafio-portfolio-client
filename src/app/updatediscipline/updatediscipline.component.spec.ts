import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedisciplineComponent } from './updatediscipline.component';

describe('UpdatedisciplineComponent', () => {
  let component: UpdatedisciplineComponent;
  let fixture: ComponentFixture<UpdatedisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedisciplineComponent]
    });
    fixture = TestBed.createComponent(UpdatedisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
