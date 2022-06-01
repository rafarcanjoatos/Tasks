import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListsReadComponent } from './lists-read.component';

describe('ListsReadComponent', () => {
  let component: ListsReadComponent;
  let fixture: ComponentFixture<ListsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
