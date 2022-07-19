import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlogoutComponent } from './studentlogout.component';

describe('StudentlogoutComponent', () => {
  let component: StudentlogoutComponent;
  let fixture: ComponentFixture<StudentlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
