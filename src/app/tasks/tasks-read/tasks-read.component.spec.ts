import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksReadComponent } from './tasks-read.component';

describe('TasksReadComponent', () => {
  let component: TasksReadComponent;
  let fixture: ComponentFixture<TasksReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
