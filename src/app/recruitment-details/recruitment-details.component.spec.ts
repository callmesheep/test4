import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentDetailsComponent } from './recruitment-details.component';

describe('RecruitmentDetailsComponent', () => {
  let component: RecruitmentDetailsComponent;
  let fixture: ComponentFixture<RecruitmentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitmentDetailsComponent]
    });
    fixture = TestBed.createComponent(RecruitmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
