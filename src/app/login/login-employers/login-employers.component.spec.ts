import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmployersComponent } from './login-employers.component';

describe('LoginEmployersComponent', () => {
  let component: LoginEmployersComponent;
  let fixture: ComponentFixture<LoginEmployersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEmployersComponent]
    });
    fixture = TestBed.createComponent(LoginEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
