import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdeptComponent } from './parentdept.component';

describe('ParentdeptComponent', () => {
  let component: ParentdeptComponent;
  let fixture: ComponentFixture<ParentdeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentdeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
