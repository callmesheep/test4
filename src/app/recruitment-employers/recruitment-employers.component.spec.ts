import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentEmployersComponent } from './recruitment-employers.component';

describe('RecruitmentEmployersComponent', () => {
  let component: RecruitmentEmployersComponent;
  let fixture: ComponentFixture<RecruitmentEmployersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitmentEmployersComponent]
    });
    fixture = TestBed.createComponent(RecruitmentEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
