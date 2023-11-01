import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedisciplineComponent } from './creatediscipline.component';

describe('CreatedisciplineComponent', () => {
  let component: CreatedisciplineComponent;
  let fixture: ComponentFixture<CreatedisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedisciplineComponent]
    });
    fixture = TestBed.createComponent(CreatedisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
