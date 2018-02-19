import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaIeIssueComponent } from './textarea-ie-issue.component';

describe('TextareaIeIssueComponent', () => {
  let component: TextareaIeIssueComponent;
  let fixture: ComponentFixture<TextareaIeIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaIeIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaIeIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
