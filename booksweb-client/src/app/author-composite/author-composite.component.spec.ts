import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCompositeComponent } from './author-composite.component';

describe('AuthorCompositeComponent', () => {
  let component: AuthorCompositeComponent;
  let fixture: ComponentFixture<AuthorCompositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorCompositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
