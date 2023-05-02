import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodochildComponent } from './todochild.component';

describe('TodochildComponent', () => {
  let component: TodochildComponent;
  let fixture: ComponentFixture<TodochildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodochildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
