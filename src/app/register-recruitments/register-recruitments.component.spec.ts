import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecruitmentsComponent } from './register-recruitments.component';

describe('RegisterRecruitmentsComponent', () => {
  let component: RegisterRecruitmentsComponent;
  let fixture: ComponentFixture<RegisterRecruitmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterRecruitmentsComponent]
    });
    fixture = TestBed.createComponent(RegisterRecruitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
